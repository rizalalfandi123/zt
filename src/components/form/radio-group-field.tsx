import { type FieldValues, type FieldPath, type UseControllerProps, Controller } from "react-hook-form";

import { FormControl, FormFieldContext, FormItem, FormLabel } from "./form";
import * as Radio from "@/components/ui/radio-group";

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  label: string;
  options: RadioOption[];
}

function RadioGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: RadioGroupProps<TFieldValues, TName>) {
  const { name, options, label, ...controllerProps } = props;

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        render={({ field }) => {
          return (
            <FormItem>
              <Radio.RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                <FormLabel>{label}</FormLabel>

                {options.map((option, index) => {
                  return (
                    <FormItem key={index} className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <Radio.RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal">{option.label}</FormLabel>
                    </FormItem>
                  );
                })}
              </Radio.RadioGroup>
            </FormItem>
          );
        }}
        name={name}
        {...controllerProps}
      />
    </FormFieldContext.Provider>
  );
}

export default RadioGroup
