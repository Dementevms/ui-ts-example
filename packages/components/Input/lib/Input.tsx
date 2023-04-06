import React, { ChangeEvent, FC } from "react";

import { Props } from "./types";

export const Input: FC<Props> = ({ className, value, onChange }) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (onChange) onChange(event.target.value);
  }

  return <input onChange={handleChange} />;
};
