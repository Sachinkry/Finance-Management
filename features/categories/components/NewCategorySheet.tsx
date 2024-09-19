import { z } from "zod";
import { insertCategorySchema } from "@/db/schema";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { CategoryForm } from "./CategoryForm";
import { useCreateCategory } from "@/features/categories/api/use-create-category";

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewCategorySheet = () => {
  const {isOpen, onClose} = useNewCategory();


  const mutation = useCreateCategory();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  const defaultValues = {
    name: '', 
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => {
      console.log("Sheet open state:", open); // Debug log
      if (!open) {
        onClose(); // Call onClose only if the sheet is being closed
      }
    }}>
      <SheetContent className="space-y-4 bg-neutral-950 w-full">
        <SheetHeader>
          <SheetTitle>
            New Category
          </SheetTitle>
          <SheetDescription>
            Create a new category to organize your transactions.
          </SheetDescription>
        </SheetHeader>
        <CategoryForm 
          defaultValues={defaultValues}  
          onSubmit={onSubmit} 
          disabled={mutation.isPending} 
        />
      </SheetContent>
    </Sheet>
  )
}
