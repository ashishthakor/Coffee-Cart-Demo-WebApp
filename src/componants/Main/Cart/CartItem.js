import classes from './CartItem.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';

const CartItem = (props) => {
  const itemPrice = props.quantity * props.price;
  const confirm = (e) => {
    console.log(e);
    props.onDeleteItem();
    message.success('Item Deleted');
  };

  const cancel = (e) => {
    console.log(e);
  };
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
          <Popconfirm
            title='Are you sure to delete Item From the Cart'
            onConfirm={confirm}
            onCancel={cancel}
            okText='Yes'
            cancelText='No'
          >
            <CloseOutlined
              // onClick={props.onDeleteItem}
              className={classes.close}
            />
          </Popconfirm>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
