import React, { ChangeEvent, FC, useEffect, useState } from "react";

import { Props } from "./types";

export const Input: FC<Props> = ({
  className,
  value: externalValue,
  onChange,
}) => {
  const [value, setValue] = useState<string | number>();

  useEffect(() => {
    if (externalValue !== undefined && String(externalValue) !== value) {
      setValue(externalValue);
    }
  }, [externalValue]);

  useEffect(() => {
    if (value !== undefined && onChange) {
      onChange(String(value));
    }
  }, [value]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return <input className={className} value={value} onChange={handleChange} />;
};
