import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { cn } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "@/components/form/text-field";
import SelectField from "@/components/form/select-field";
import { PointIcon } from "../../components/icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { useNavigate } from "react-router-dom";

const projectFormSchema = z.object({
  name: z.string().min(1),
  color: z.string().min(1),
});

type ProjectForm = z.infer<typeof projectFormSchema>;

type ProjectColor = {
  label: string;
  value: string;
  indicatorClassName: string;
};

const projectColors: ProjectColor[] = [
  { label: "Red", value: "red", indicatorClassName: "text-red-500" },
  { label: "Blue", value: "blue", indicatorClassName: "text-blue-500" },
  { label: "Amber", value: "amber", indicatorClassName: "text-amber-500" },
  { label: "Indigo", value: "indigo", indicatorClassName: "text-indigo-500" },
];

export const ModalCreateProject = () => {
  const navigate = useNavigate();

  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      color: "amber",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log({ data });
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
        <FormProvider {...form}>
          <TextField control={form.control} name="name" label="Name" />
          <SelectField control={form.control} name="color" label="Color">
            {projectColors.map((item, index) => {
              return (
                <SelectPrimitive.Item
                  className={cn([
                    "relative flex w-full cursor-default select-none items-center rounded-sm text-sm outline-none",
                    "py-1.5 pl-2 pr-8",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    "focus:bg-accent focus:text-accent-foreground",
                  ])}
                  value={item.value}
                  key={index}
                >
                  <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                    <PointIcon className={item.indicatorClassName} />
                  </span>
                  <SelectPrimitive.ItemText>{item.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              );
            })}
          </SelectField>
        </FormProvider>
        <DialogFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
