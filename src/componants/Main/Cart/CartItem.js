import classes from './CartItem.module.css';
import { CloseOutlined } from '@ant-design/icons';

const CartItem = (props) => {
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
    </>
  );
};

export default CartItem;
