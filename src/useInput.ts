import React, { useState } from "react";

export function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    function () { setValue(initialValue)},
  ];
}
