import React from 'react'
import PropTypes from 'prop-types'
import { FaWindowClose } from 'react-icons/fa';
import Stripe from './../components/Stripe.jsx'

const Modal = ({isModalVisible, hideModal, price}) => {
    const hideShowModal = isModalVisible ? 'display-block' : 'display-none'

    return(
        <div className={hideShowModal}>
            <div className="modal-content">
                < FaWindowClose onClick={hideModal}/>
                <Stripe price={price} onSubmit={hideModal}/>
            </div>

        </div>
    )
}

Modal.propTypes = {
    isModalVisible : PropTypes.bool.isRequired,
    handleModal : PropTypes.func.isRequired,
    hideModal : PropTypes.func.isRequired,
    price: PropTypes.any.isRequired
}
export default Modal