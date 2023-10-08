import classes from './CheckoutInputItem.module.css';

const CheckoutInputItem = (props) => {
  const nameControlClasses = `${classes.control} ${
    props.inputValidity ? '' : classes.invalid
  }`;

  return (
    <div className={nameControlClasses}>
      <label htmlFor={props.id}>{props.text}</label>
      <input ref={props.inputRef} type={props.type} id={props.id} />
      {!props.inputValidity && <p>{props.errorText}</p>}
    </div>
  );
};

export default CheckoutInputItem;
