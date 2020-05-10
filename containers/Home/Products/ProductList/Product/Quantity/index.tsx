import { DecrementButton, Input, IncrementButton } from './styles';

const Quantity = ({ id, onAdd, onRemove, quantity }) => {
  return (
    <>
      <DecrementButton onClick={() => onRemove(id)}>–</DecrementButton>
      <Input type="text" value={quantity} readOnly />
      <IncrementButton onClick={() => onAdd(id)}>+</IncrementButton>
    </>
  );
};

export default Quantity;
