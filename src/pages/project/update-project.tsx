import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateProject, useProjectQuery } from "@/lib/queries";
import { v4 as uuid } from "uuid";
import { projectFormSchema, type ProjectForm } from "@/schema/project.schema";
import { useQueryClient } from "@tanstack/react-query";
import { FormCreateProject } from "./form-create-project";

const ModalUpdateProject = () => {
  const navigate = useNavigate();

  const id = useParams()["id"] as string;

  const { refetch } = useProjectQuery(id);

  const queryClient = useQueryClient();

  const { mutateAsync } = useCreateProject();

  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: async () => {
      const { data } = await refetch();

      return {
        color: data?.color ?? "amber",
        name: data?.name ?? '',
      };
    },
  });

  const onSubmit = async (data: ProjectForm) => {
    const id = uuid({});

    await mutateAsync({ ...data, _id: id });

    queryClient.invalidateQueries({ queryKey: ["PROJECTS"] });

    navigate(-1);
  };

  return (
    <Dialog
      modal
      open
      onOpenChange={(nextValue) => {
        if (nextValue === false) {
          navigate(-1);
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>

        <FormCreateProject form={form} />

        <DialogFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUpdateProject;
