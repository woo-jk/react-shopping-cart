import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { handlers } from '../../../mocks/handlers';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { msw: handlers },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
