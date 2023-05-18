import { styled } from 'styled-components';
import type { CartProduct } from '../../../types/product';
import CheckBox from '../../common/CheckBox/CheckBox';
import Image from '../../common/Image/Image';
import TrashCanIcon from '../../../assets/icons/TrashCanIcon';
import Counter from '../../common/Counter/Counter';
import { useState } from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import useCartService from '../../../hooks/useCartService';
import { useCheckedCartListValue } from '../../../provider/CheckedListProvider';

interface CartItemProps {
  cartItem: CartProduct;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { id, quantity } = cartItem;
  const { imageSrc, name, price } = cartItem.product;

  const { updateCartItemQuantity, deleteCartItem } = useCartService();
  const [count, setCount] = useState(quantity);
  const { isChecked, addCheckedItem, deleteCheckedItem } =
    useCheckedCartListValue();

  const updateQuantity = (quantity: number) => {
    setCount(quantity);
    updateCartItemQuantity(id)(quantity);
  };

  const handleRemoveButtonClick = () => {
    if (!window.confirm('해당 물품을 장바구니에서 삭제 하시겠습니까?')) return;

    deleteCartItem(id);
    deleteCheckedItem(id);
  };

  const handleCheckBoxChange = () => {
    if (isChecked(id)) {
      deleteCheckedItem(id);
      return;
    }

    addCheckedItem(id);
  };

  return (
    <CartItemContainer>
      <ItemContents>
        <CheckBox isChecked={isChecked(id)} onChange={handleCheckBoxChange} />
        <Image src={imageSrc} size="medium" />
        <Name>{name}</Name>
      </ItemContents>
      <ItemControllers>
        <RemoveButton onClick={handleRemoveButtonClick}>
          <TrashCanIcon />
        </RemoveButton>
        <Counter count={count} updateCount={updateQuantity} min={1} />
        <Price>{formatPrice(price)}</Price>
      </ItemControllers>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 735px;
  height: 200px;

  padding: 25px 0;
`;

const ItemContents = styled.div`
  display: flex;
  gap: 15px;
`;

const Name = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #333;
`;

const ItemControllers = styled.div`
  display: flex;
  flex-direction: column;

  align-items: end;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #333;
`;

export default CartItem;
