import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';
import { handlers } from '../../../mocks/handlers';

const meta = {
  title: 'ProductList',
  component: ProductList,
  tags: ['autodocs'],
  parameters: { msw: [handlers] },
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
