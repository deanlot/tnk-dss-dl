import React from 'react';
import type { ReactNode } from 'react';
import { Button as TUIButton } from 'theme-ui';

type ButtonProps = {
  /**
   * Variant of the button, either 'primary' or 'secondary'.
   */
  variant?: 'primary' | 'secondary';
  /**
   * Indicates wether the button is disabled or not.
   */
  disabled?: boolean;
  /**
   * The child node(s) of the button component.
   */
  children: ReactNode | ReactNode[];
};

/**
	Button component that the user can press to trigger an action.
 */
export const Button = ({ variant = 'primary', ...otherProps }: ButtonProps) => (
  <TUIButton variant={variant} {...otherProps} />
);
