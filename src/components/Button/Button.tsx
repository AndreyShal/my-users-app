import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType = 'button'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>({ ...rest }: Props<T>) => {
  return <button {...rest}>Refresh</button>;
};
