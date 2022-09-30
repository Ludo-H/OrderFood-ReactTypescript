import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// La modal est rendu en portail dans index.html

type Props = {
    children?: React.ReactNode,
    onClose: () => void
};

type PropsOverlay = {
    children?: React.ReactNode
};

type PropsBackdrop = {
    onClose: () => void
}




const Backdrop: React.FC<PropsBackdrop> = (props) => {
    return (
        <div className='backdrop' onClick={props.onClose}/>
    )
};


const ModalOverlay: React.FC<PropsOverlay> = (props) => {
    return (
        <div className='modal'>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
};

const portalElement = document.getElementById('overlays')!;

const Modal: React.FC<Props> = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;