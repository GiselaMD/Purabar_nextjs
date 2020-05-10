import { ProductsProps } from '../types';

export type ListProps = {
  onAdd: Function;
  onRemove: Function;
  total: Record<string, any>;
} & ProductsProps;
