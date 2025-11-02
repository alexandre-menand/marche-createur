import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';

type Props = {
  children: React.ReactNode;
  asChild?: boolean;
  maxWidth?: string;
};

export default function Wrapper({children, asChild = false, maxWidth}: Props) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot="div"
      className={`m-auto w-full md:px-8 px-4 ${maxWidth ? maxWidth : 'max-w-7xl '}`}
    >
      {children}
    </Comp>
  );
}
