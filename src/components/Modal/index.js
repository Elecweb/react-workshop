import React from 'react';
import ReactModal from 'react-modal';
import './index.css';
import modalStyle from './modal-style';

ReactModal.setAppElement('#root');

function Modal({ isOpen, onClose, detail }) {
    return (
        <ReactModal isOpen={isOpen} style={modalStyle} onRequestClose={onClose}>
            <h1 className="modal--title">Detail</h1>
            <p className="modal--content">{detail}</p>
        </ReactModal>
    );
}

export default Modal;