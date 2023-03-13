import React, { FC } from 'react';

import { Props } from './types';
import { Typography } from '../../Typography'

export const Button: FC<Props> = ({ size }) => {
  return <div className={size}><Typography color="green">Hello World</Typography></div>
}


