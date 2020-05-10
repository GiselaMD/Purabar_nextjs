import React, { FC } from 'react';

import Quantity from './Quantity';

import { ProductProps } from './types';

import { Wrapper, ProductName, Image } from './styles';

const Product: FC<ProductProps> = ({ sku, onAdd, onRemove, numItems }) => (
  <Wrapper>
    {sku.image && <Image src={sku.image} />}
    <ProductName>{sku.attributes.name}</ProductName>
    <Quantity
      onAdd={onAdd}
      onRemove={onRemove}
      quantity={numItems}
      id={sku.id}
    />
    <p>R$ {Number((sku.price / 100) * numItems).toFixed(2)}</p>
  </Wrapper>
);

export default Product;
