import * as React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import spinners from 'react-spinners';
import { ThemeContext } from 'styled-components';

const StyledButton = styled.button(
  ({ theme, primary = true, secondary, disabled = false, loading = false }) => {
    const backgroundColor =
      primary && !secondary ? theme.colors.primary : theme.colors.secondary;

    return {
      'font-size': theme.fontSizes[2],
      padding: `${theme.space[2]} ${theme.space[3]}`,
      minWidth: theme.space[9],
      minHeight: theme.space[6],
      'border-radius': theme.radii[1],
      color:
        primary && !secondary
          ? theme.colors.onPrimary
          : theme.colors.onSecondary,
      'border-width': '0px',
      'background-color': backgroundColor,
      opacity: disabled ? 0.6 : 1,
      '&:hover': {
        opacity: loading ? 1 : 0.6,
        'background-color': backgroundColor,
      },
    };
  }
);

type ButtonProps = {
  /**
   * Primary variant of button.
   */
  primary?: boolean;
  /**
   * Secondary variant of button.
   */
  secondary?: boolean;
  /**
   * Specifies if the button is disabled.
   */
  disabled?: boolean;
  /**
   * Used to set a loading state on the button.
   */
  loading?: boolean;
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[];
};

/**
  Button component that the user can press to trigger an action.
 */
export const Button = ({
  disabled,
  loading = false,
  ...otherProps
}: ButtonProps) => {
  const theme = React.useContext(ThemeContext);

  const { primary, secondary } = otherProps;

  return loading ? (
    <StyledButton {...otherProps} disabled={disabled} loading>
      <spinners.ClipLoader
        color={
          primary && !secondary
            ? theme.colors.onPrimary
            : theme.colors.onSecondary
        }
        size={theme.fontSizes[2]}
      />
    </StyledButton>
  ) : (
    <StyledButton {...otherProps} disabled={disabled} />
  );
};
