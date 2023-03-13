import React, { FC } from 'react';

import { Props } from './types';

export const Typography: FC<Props> = ({ color, children }) => {
  return <div style={{color}}>{children}</div>
}


