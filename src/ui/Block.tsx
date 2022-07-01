import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const Block: FC<Props> = ({ children }) => {
  return (
    <div>{children}</div>
  );
};
