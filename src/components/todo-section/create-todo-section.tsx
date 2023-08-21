import React from "react";
import Button from "@/components/ui/button";
import FormTodoSection from "@/components/todo-section/form-todo-section";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid } from "uuid";
import { type TodoSectionForm, todoSectionFormSchema } from "@/schema-and-types";
import { useAppDispatch } from "@/hooks";
import { todoBoardActions } from "@/stores/todo-column-store";
import { projectActions } from "@/stores/project-store";
import { cn } from "@/lib";

interface AddNewTodoSectionProps extends React.PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string
}

export const AddNewTodoSection: React.FunctionComponent<AddNewTodoSectionProps> = (props) => {
  const { open, children, onClose, className } = props;

  const projectId = useParams()["id"]!;

  const dispatch = useAppDispatch();

  const form = useForm<TodoSectionForm>({
    resolver: zodResolver(todoSectionFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async ({ name }: TodoSectionForm) => {
    const id = uuid({});
    dispatch(todoBoardActions.createTodoBoard({ name, projectId, todo: [], id }));
    dispatch(projectActions.addNewTodoSection({ sectionId: id, projectId }));
    form.reset();
    onClose();
  };

  return (
    <div className={cn("shrink-0", className)}>
      {open ? (
        <div className="w-full flex flex-col gap-4 border border-slate-500 p-2 rounded-lg">
          <FormTodoSection form={form} />

          <div className="flex gap-2">
            <Button onClick={form.handleSubmit(onSubmit)}>Save</Button>
            <Button variant="ghost" onClick={() => onClose()}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
