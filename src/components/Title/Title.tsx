import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import s from './Title.module.scss';

type Props<T extends ElementType = 'h1'> = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Title = <T extends ElementType = 'h1'>({ className,children, ...rest }: Props<T>) => {
  return <h1 {...rest} className={`${className}, ${s.title}`}>{children}</h1>;
};