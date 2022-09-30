import React, { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

type Props = {
    onShowCart: () => void
};

const Header: React.FC<Props> = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <h1>React-Typescript</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className='main-image'>
                <img src={mealsImg} alt='buffet' />
            </div>
        </Fragment>
    );
};

export default Header;