import { useMutation, useQuery } from "@tanstack/react-query";
import { delay, useCouchDB } from "@/lib";
import { type Project } from "@/schema";

const projectId = "projects";

export interface Projects {
  _id: typeof projectId;
  items: Project[];
}

export const useCreateProject = () => {
  const { db } = useCouchDB();

  return useMutation<unknown, unknown, Omit<Project, "id">>({
    mutationFn: async (newProject) => {
      db.get<Projects>(projectId)
        .then((res) => {
          const items = res.items;

          items.push(newProject);

          return db.put<Projects>({ ...res, items });
        })
        .catch(() => {
          const items = [newProject];

          return db.put<Projects>({ _id: projectId, items });
        });
    },
    mutationKey: ["CREATE_PROJECT"],
  });
};

export const useDeleteProject = () => {
  const { db } = useCouchDB();

  return useMutation<unknown, unknown, string>({
    mutationFn: async (id) => {
      db.get<Projects>(projectId).then((res) => {
        const items = res.items.filter((item) => item._id !== id);

        return db.put<Projects>({ ...res, items });
      });
    },
    mutationKey: ["DELETE_PROJECT"],
  });
};

export const useProjectsQuery = () => {
  const { db } = useCouchDB();

  return useQuery<Project[]>({
    queryFn: async () => {
      await delay(200);

      try {
        const data = await db.get<Projects>(projectId);

        return data.items;
      } catch (error) {
        return [];
      }
    },
    queryKey: ["PROJECTS"],
  });
};

export const useProjectQuery = (id: string) => {
  const { db } = useCouchDB();

  return useQuery<Project | undefined>({
    queryFn: async () => {
      await delay(200);

      try {
        const data = await db.get<Projects>(projectId);

        const project = data.items.find((project) => project._id === id);

        return project;
      } catch (error) {
        return undefined;
      }
    },
    queryKey: [id],
    enabled: false,
  });
};
