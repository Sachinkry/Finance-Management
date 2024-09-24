import { useCSVReader } from "react-papaparse";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type Props = {
  onUpload: (results: any) => void;
};

const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  //TODO: Add a paywall

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (

        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              size={"sm"}
              {...getRootProps()}
            >
              <Upload className="size-4 mr-2" />
              Import
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Upload CSV</p>
          </TooltipContent>
        </Tooltip>
        </TooltipProvider>
        
      )}
    </CSVReader>
  )
}

export default UploadButton;