import { useRef, useState } from 'react';

import classes from './Checkout.module.css';
import CheckoutInputItem from './CheckoutInputItem';

const isEmpty = (value) => value.trim().length === 0;

const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValiditiy, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    };

    props.onConfirm(userData);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <CheckoutInputItem
        id="name"
        type="text"
        text="Your Name"
        errorText="Please enter a valid name!"
        inputRef={nameInputRef}
        inputValidity={formInputsValiditiy.name}
      />
      <CheckoutInputItem
        id="street"
        type="text"
        text="Street"
        errorText="Please enter a valid street name!"
        inputRef={streetInputRef}
        inputValidity={formInputsValiditiy.street}
      />
      <CheckoutInputItem
        id="postal"
        type="text"
        text="Postal"
        errorText="Please enter a valid postal code(5 characters long)!"
        inputRef={postalCodeInputRef}
        inputValidity={formInputsValiditiy.postalCode}
      />
      <CheckoutInputItem
        id="city"
        type="text"
        text="City"
        errorText="Please enter a valid city name"
        inputRef={cityInputRef}
        inputValidity={formInputsValiditiy.city}
      />
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
