import { type FieldValues, type FieldPath, type UseControllerProps, Controller } from "react-hook-form";
import { FormControl, FormFieldContext, FormItem, FormLabel, FormMessage } from "./form";
import { Select, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { type SelectItemProps } from "@radix-ui/react-select";

interface SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  label: string;
  children: React.ReactElement<SelectItemProps> | Array<React.ReactElement<SelectItemProps>>;
}

function SelectField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: SelectFieldProps<TFieldValues, TName>) {
  const { label, children, ...conrollerProps } = props;
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>{children}</SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          );
        }}
        {...conrollerProps}
      />
    </FormFieldContext.Provider>
  );
}

export default SelectField;
