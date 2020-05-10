import { DecrementButton, Input, IncrementButton } from './styles';

const Quantity = ({ onAdd, onRemove, quantity }) => {
  return (
    <>
      <DecrementButton onClick={onRemove}>–</DecrementButton>
      <Input type="text" value={quantity} readOnly />
      <IncrementButton onClick={onAdd}>+</IncrementButton>
    </>
  );
};

export default Quantity;
