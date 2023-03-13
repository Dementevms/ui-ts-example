import { CSSProperties, ReactNode, FC } from 'react';

type Props = {
    color?: CSSProperties['color'];
    children?: ReactNode;
};

declare const Typography: FC<Props>;

export { Typography };
