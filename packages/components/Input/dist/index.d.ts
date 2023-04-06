import { FC } from 'react';

type Props = {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
};

declare const Input: FC<Props>;

export { Input };
