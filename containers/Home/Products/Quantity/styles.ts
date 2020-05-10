import styled from 'styled-components';

export const Input = styled.input`
  width: 80px;
  padding: 0 12px;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  outline: none;
  background: transparent;
  border: 1px solid #819efc;
  color: #000;
  height: 40px;
  user-select: none;
`;

const Button = styled.span`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  color: #fff;
  height: 42px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background-color: #2b1f25;
  user-select: none;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #ffb9f6;
`;

export const DecrementButton = styled(Button)`
  border-right: none;
  border-radius: 4px 0 0 4px;
`;

export const IncrementButton = styled(Button)`
  border-left: none;
  border-radius: 0 4px 4px 0;
`;
