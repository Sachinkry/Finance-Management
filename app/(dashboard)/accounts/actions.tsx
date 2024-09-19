"use client";

import { Button } from "@/components/ui/button";
import { useDeleteAccount } from "@/features/accounts/api/use-delete-account";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { useConfirm } from "@/hooks/use-confirm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";


type Props = {
  id: string;
};

export const Actions = ({ id }: Props) => {
  const [ConfirmationDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this account."
  );

  const deleteMutation = useDeleteAccount(id);
  const { onOpen } = useOpenAccount();

  const handleDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate();
    }
  };

  return (
    <>
      <ConfirmationDialog />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"} className="size-8 p-0">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-neutral-800 p-1 rounded-sm">
          <DropdownMenuItem
            disabled={deleteMutation.isPending}
            onClick={() => onOpen(id)}
            className="flex bg-neutral-800 pl-2 pr-8 py-1.5 items-center hover:bg-neutral-900/50 transition-colors duration-300  cursor-pointer rounded-sm"
          >
            <Edit className="size-4 mr-2" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={deleteMutation.isPending}
            onClick={handleDelete}
            className="flex bg-neutral-800 pl-2 pr-8 py-1.5 items-center hover:bg-neutral-900/50 cursor-pointer rounded-sm"
          >
            <Trash className="size-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}