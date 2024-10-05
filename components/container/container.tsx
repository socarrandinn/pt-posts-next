import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={`px-2 max-w-7xl w-full mt-8 mx-auto md:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
