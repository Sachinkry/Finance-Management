import CreateableSelect from "react-select/creatable";
import { useMemo } from "react";
import { SingleValue } from "react-select";

type Props = {
  onChange: (value?: string) => void;
  onCreate?: (value: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

export const Select = ({
  value,
  onChange,
  disabled,
  onCreate,
  options = [],
  placeholder,
}: Props) => {
  const onSelect = (option: SingleValue<{ label: string; value: string }>) => {
    onChange(option?.value);
  };

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <CreateableSelect
      placeholder={placeholder}
      className="text-sm h-10"
      styles={{
        control: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "#171717" : "#0a0a0a", 
          borderColor: "#181818", 
          ":hover": {
            borderColor: "#6B21A8", 
          },
        }),
        singleValue: (base) => ({
          ...base,
          color: "#FbFbFb", 
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "#0f0f0f", 
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "#262626" : "#0f0f0f",
          color: state.isSelected ? "#FFFFFF" : "#D4D4D4", 
          ":hover": {
            backgroundColor: "#262626", 
            color: "#FFFFFF", 
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: "#E0E0E0",
        }),
      }}
      value={formattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
    />
  );
};
