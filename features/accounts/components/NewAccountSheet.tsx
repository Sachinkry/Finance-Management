import { z } from "zod";
import { insertAccountSchema } from "@/db/schema";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { AccountForm } from "./AccountForm";
import { useCreateAccount } from "@/features/accounts/api/use-create-account";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const NewAccountSheet = () => {
  const {isOpen, onClose} = useNewAccount();

  const mutation = useCreateAccount();

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
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 bg-neutral-950 w-full">
        <SheetHeader>
          <SheetTitle>
            New Account
          </SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
        <AccountForm 
          defaultValues={defaultValues}  
          onSubmit={onSubmit} 
          disabled={mutation.isPending} 
        />
      </SheetContent>
    </Sheet>
  )
}

export default NewAccountSheet;