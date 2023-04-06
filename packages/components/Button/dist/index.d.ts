import { ReactNode, FC } from 'react';

type Props = {
    size: 'small' | 'medium' | 'large';
    children?: ReactNode;
};

declare const Button: FC<Props>;

export { Button };
