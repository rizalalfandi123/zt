import Dialog from "@/components/ui/dialog";

import Button from "@/components/ui/button";
import FormProject from "@/pages/project/form-project";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { projectFormSchema, type ProjectForm } from "@/schema-and-types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { projectActions } from "@/stores/project-store";

const ModalUpdateProject = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const id = useParams()["id"] as string;

  const projects = useAppSelector((store) => store.projects.value);

  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: projects[id],
  });

  const onSubmit: SubmitHandler<ProjectForm> = (data) => {
    dispatch(projectActions.updateProject({ id, ...data }));

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
          <Dialog.Title>Edit Project</Dialog.Title>
        </Dialog.Header>

        <FormProject form={form} />

        <Dialog.Footer>
          <Button onClick={form.handleSubmit(onSubmit)}>Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ModalUpdateProject;
