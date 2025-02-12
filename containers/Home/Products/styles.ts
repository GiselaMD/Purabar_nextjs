import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 120px 60px;
  background-color: #f7eee4;
`;

export const Wapper = styled.div``;

const BigText = css`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 10px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  ${BigText}
`;

export const ProductsWrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  max-width: 800px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
