import { cn, toTitleCase } from "@/lib";
import { FormProvider, UseFormReturn } from "react-hook-form";
import TextField from "@/components/form/text-field";
import SelectField from "@/components/form/select-field";
import { PointIcon } from "../../components/icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { projectIndicator } from "@/lib/constants";
import { ProjectForm } from "@/schema";

export const FormCreateProject: React.FunctionComponent<{ form: UseFormReturn<ProjectForm> }> = ({ form }) => {
  return (
    <FormProvider {...form}>
      <TextField defaultValue="" control={form.control} name="name" label="Name" />
      <SelectField defaultValue="amber" control={form.control} name="color" label="Color">
        {projectIndicator.map((item, index) => {
          return (
            <SelectPrimitive.Item
              className={cn([
                "relative flex w-full cursor-default select-none items-center rounded-sm text-sm outline-none",
                "py-1.5 pl-2 pr-8",
                "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                "focus:bg-accent focus:text-accent-foreground",
              ])}
              value={item.name}
              key={index}
            >
              <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                <PointIcon className={item.className} />
              </span>
              <SelectPrimitive.ItemText>{toTitleCase(item.name)}</SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          );
        })}
      </SelectField>
    </FormProvider>
  );
};
