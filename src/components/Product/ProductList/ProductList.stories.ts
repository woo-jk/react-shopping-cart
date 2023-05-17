import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';
import mockData from '../../../../public/mockData.json';

const meta = {
  title: 'ProductList',
  component: ProductList,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: mockData.products,
  },
};