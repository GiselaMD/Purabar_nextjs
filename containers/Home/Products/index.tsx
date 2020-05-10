import React, { FC, useState } from 'react';

import ProductList from './ProductList';
import CheckoutButton from './CheckoutButton';

import { ProductsProps } from './types';

import { SectionWrapper, Wapper, Title, ProductsWrapper } from './styles';

const Products: FC<ProductsProps> = ({ skus }) => {
  const initialState = {};
  skus.forEach(sku => {
    initialState[sku.id] = { value: 0, label: sku.attributes.name };
  });
  const [totalItems, setTotalItems] = useState(initialState);

  const addItem = (id: any) =>
    setTotalItems({
      ...totalItems,
      [id]: {
        ...totalItems[id],
        value: Math.min(12, totalItems[id].value + 1),
      },
    });

  const removeItem = (id: any) =>
    setTotalItems({
      ...totalItems,
      [id]: {
        ...totalItems[id],
        value: Math.max(0, totalItems[id].value - 1),
      },
    });

  return (
    <SectionWrapper>
      <Wapper>
        <Title>Barra de proteína</Title>
        <p>
          A barrinha pra você levar pro treino ou como aquele lanche da tarde!
        </p>
      </Wapper>
      <ProductsWrapper>
        <ProductList
          skus={skus}
          onAdd={addItem}
          onRemove={removeItem}
          total={totalItems}
        />
      </ProductsWrapper>
      <CheckoutButton totalItems={totalItems} skus={skus} />
    </SectionWrapper>
  );
};

export default Products;
