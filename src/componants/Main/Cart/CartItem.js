import classes from './CartItem.module.css';
import {
  CloseOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import { useContext } from 'react';
import CartContext from '../../../store/cartContext';
const CartItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;
  // console.log(props.id);
  // console.log(props.name);
  // console.log(props.quantity);
  // console.log(props.price);
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);
  const itemPrice = props.quantity * props.price;
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td className={classes.quantity}>
          {props.quantity}&nbsp;X{`$ ${props.price.toFixed(2)}`}
          <button className={classes.btn} onClick={props.onAdd}>
            +
          </button>
          <button className={classes.btn} onClick={props.onRemove}>
            -
          </button>
        </td>
        <td>{`$ ${itemPrice.toFixed(2)}`}</td>
        <td>
          <CloseOutlined
            onClick={props.onDeleteItem}
            className={classes.close}
          />
        </td>
      </tr>
      {/* <p>Hello</p> */}
    </>
  );
};

export default CartItem;
