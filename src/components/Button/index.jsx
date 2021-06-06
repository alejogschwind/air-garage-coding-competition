import React from 'react';

import { ButtonWrapper } from './styles';

const Button = ({ children, type, ...props }) => {
  return (
    <ButtonWrapper type={type} {...props} target="_blank">
      {children}
    </ButtonWrapper>
  );
};

export default Button;
