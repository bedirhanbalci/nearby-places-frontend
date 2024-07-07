import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextInput: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
