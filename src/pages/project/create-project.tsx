import Dialog from "@/components/ui/dialog";

import Button from "@/components/ui/button";
import FormProject from "@/pages/project/form-project";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { projectFormSchema, type ProjectForm } from "@/schema-and-types";
import { useAppDispatch } from "@/hooks";
import { projectActions } from "@/stores/project-store";
import { type CreateProjectPayload } from "@/stores/project-store/create-project.reducer";

const ModalCreateProject = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useAppDispatch();

  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      color: "amber",
      view: "BOARD"
    },
  });

  const onSubmit = (data: ProjectForm) => {
    const id = uuid();

    const project: CreateProjectPayload = {
      ...data,
      isFavourite: false,
      isAchive: false,
      todoSections: [],
      id,
    };

    if (location.state.targetIndex) {
      project.targetIndex = location.state.targetIndex;
    }

    dispatch(projectActions.createProject(project));

    navigate(-1);
  };

  return (
    <Dialog.Root
      modal
      open
      onOpenChange={(nextValue) => {
        if (!nextValue) navigate(-1);
      }}
    >
      <Dialog.Content className="sm:max-w-[425px]">
        <Dialog.Header>
          <Dialog.Title>Add Project</Dialog.Title>
        </Dialog.Header>

        <FormProject form={form} />

        <Dialog.Footer>
          <Button onClick={form.handleSubmit(onSubmit)}>Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ModalCreateProject;
