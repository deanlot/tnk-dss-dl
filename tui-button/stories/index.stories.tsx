import React from 'react';
import { Button } from '../index';
import { layout } from '~/tui-utils';
export default layout;

export const primary = () => <Button variant="primary">Primary</Button>;
export const secondary = () => <Button variant="secondary">Secondary</Button>;
export const disabled = () => <Button disabled>Disabled</Button>;
export const secondary_disabled = () => (
  <Button variant="secondary" disabled>
    Disabled
  </Button>
);
