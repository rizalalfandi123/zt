import { type FieldValues, type FieldPath, type UseControllerProps, Controller } from "react-hook-form";
import { FormControl, FormFieldContext, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "../ui/input";

interface TextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
  label: string;
}

function TextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: TextFieldProps<TFieldValues, TName>) {
  const { label, name, rules, shouldUnregister, defaultValue, control, ...inputProps } = props;
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>{label}</FormLabel>

              <FormControl>
                <Input {...inputProps} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          );
        }}
        rules={rules}
        name={name}
        control={control}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
      />
    </FormFieldContext.Provider>
  );
}

export default TextField;
