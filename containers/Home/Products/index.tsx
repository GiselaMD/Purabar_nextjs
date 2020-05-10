import React, { FC, useState } from 'react';
import Stripe from 'stripe';
import {
  SectionWrapper,
  Wapper,
  Title,
  ProductsWrapper,
  Product,
  Image,
  ProductName,
} from './styles';
import CheckoutButton from '../CheckoutButton';
import Quantity from './Quantity';

interface Props {
  skus: Stripe.Sku[];
}

export const Products: FC<Props> = ({ skus }) => {
  const [numItems, setNumItems] = useState(1);

  const addItem = () => setNumItems(num => Math.min(12, num + 1));
  const removeItem = () => setNumItems(num => Math.max(1, num - 1));

  return (
    <SectionWrapper>
      <Wapper>
        <Title>Barra de proteína</Title>
        <p>
          A barrinha pra você levar pro treino ou como aquele lanche da tarde!
        </p>
      </Wapper>
      <ProductsWrapper>
        {skus.map(sku => (
          <Product key={sku.id}>
            {sku.image && <Image src={sku.image} />}
            <ProductName>{sku.attributes.name}</ProductName>
            <Quantity
              onAdd={addItem}
              onRemove={removeItem}
              quantity={numItems}
            />
            <p>R$ {Number((sku.price / 100) * numItems).toFixed(2)}</p>

            <CheckoutButton skuId={sku.id} itemName={sku.attributes.name} />
          </Product>
        ))}
      </ProductsWrapper>
    </SectionWrapper>
  );
};
export default Products;
