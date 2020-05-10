import React, { FC } from 'react';

import Product from './Product';

import { ListProps } from './types';

const ProductList: FC<ListProps> = ({ skus, total, ...rest }) => (
  <>
    {skus.map(sku => (
      <Product
        key={sku.id}
        sku={sku}
        numItems={total[sku.id].value}
        {...rest}
      />
    ))}
  </>
);

export default ProductList;
