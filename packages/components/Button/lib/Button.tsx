import React, { FC } from 'react';

import { Props } from './types';

export const Button: FC<Props> = ({ size, children }) => {
  return <div className={size}>{children}</div>
}


