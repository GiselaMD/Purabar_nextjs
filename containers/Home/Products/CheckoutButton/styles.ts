import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => (props.disabled ? '#636363' : '#2b1f25')};
  color: white;
  border: none;
  text-decoration: none;
  height: 35px;
  letter-spacing: 2px;
  padding: 4px 20px;
  width: fit-content;
  border-radius: 20px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
