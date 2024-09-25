import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.transactions[":id"]["$patch"]>;
type RequestType = InferRequestType<typeof client.api.transactions[":id"]["$patch"]>["json"];

export const useEditTransaction = (id?: string) => {
  const queryClient = useQueryClient();
  
  const mutation = useMutation<
  ResponseType,
  Error,
  RequestType
  >({
    mutationFn: async (json) => {
      if (!id) {
        throw new Error("Transaction ID is missing.");
      }

      try {
        const response = await client.api.transactions[":id"]["$patch"]({
          param: { id },
          json,
        });

        if (!response.ok) {
          throw new Error("Failed to update transaction.");
        }

        return await response.json(); // Ensure this is correct
      } catch (error) {
        console.error("Error updating transaction:", error);
        throw error; // Re-throw so that onError gets triggered
      }
    },
    onSuccess: () => {
      toast.success("Transaction updated")
      queryClient.invalidateQueries({ queryKey: ["transaction", { id }]});
      queryClient.invalidateQueries({ queryKey: ["transactions"]});
      queryClient.invalidateQueries({ queryKey: ["summary"]});
    },
    onError: () => {
      toast.error("Failed to edit transaction")
    }
  });

  return mutation;
}