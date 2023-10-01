import React, { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';
import classes from './Header.module.css';

const MainHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onCart={props.onCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default MainHeader;
