import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import s from './Button.module.scss'

type Props<T extends ElementType = 'button'> = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>({ className, ...rest }: Props<T>) => {
  return <button {...rest} className={`${className}, ${s.btn}`}>Refresh</button>;
};
