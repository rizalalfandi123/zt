import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateProject } from "@/lib/queries";
import { v4 as uuid } from "uuid";
import { projectFormSchema, type ProjectForm } from "@/schema/project.schema";
import { useQueryClient } from "@tanstack/react-query";
import { FormCreateProject } from "./form-create-project";

const ModalCreateProject = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutateAsync } = useCreateProject();

  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      color: "amber",
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
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        
        <FormCreateProject form={form} />

        <DialogFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCreateProject