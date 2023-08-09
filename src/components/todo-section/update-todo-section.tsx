import Button from "@/components/ui/button";
import FormTodoSection from "@/components/todo-section/form-todo-section";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type TodoSectionForm, todoSectionFormSchema } from "@/schema-and-types";
import {  useAppDispatch, useAppSelector } from "@/hooks";
import { todoBoardActions } from "@/stores/todo-column-store";

interface AddNewTodoSectionProps extends React.PropsWithChildren {
  open: boolean;
  onClose: () => void;
  sectionId: string;
}

const UpdateTodoSection: React.FunctionComponent<AddNewTodoSectionProps> = (props) => {
  const { open, children, onClose, sectionId } = props;

  const dispatch = useAppDispatch();

  const defaultValues: TodoSectionForm = useAppSelector(store => ({name: store.todoBoard.value.columns[sectionId].name}))


  const form = useForm<TodoSectionForm>({
    resolver: zodResolver(todoSectionFormSchema),
    defaultValues,
  });

  const onSubmit = async ({ name }: TodoSectionForm) => {
    dispatch(todoBoardActions.updateTodoBoard({ id: sectionId, name }));
    onClose();
  };

  return (
    <div className="w-full shrink-0">
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

export default UpdateTodoSection