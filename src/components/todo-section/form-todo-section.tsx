import TextField from "@/components/form/text-field";

import { FormProvider, UseFormReturn } from "react-hook-form";
import { type TodoSectionForm } from "@/schema-and-types";

const FormTodoSection: React.FunctionComponent<{ form: UseFormReturn<TodoSectionForm> }> = ({ form }) => {
  return (
    <FormProvider {...form}>
      <TextField autoFocus defaultValue="" control={form.control} name="name" label="Name" />
    </FormProvider>
  );
};

export default FormTodoSection;
