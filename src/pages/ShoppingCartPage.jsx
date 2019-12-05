import React from 'react'
import PropTypes from "prop-types";
import { IoIosTrash } from 'react-icons/io'
import { connect } from "react-redux";
import { removeItem } from '../actions';
import { toast } from 'react-toastify'
import * as selectors from './../../src/store/selectors'
import * as services from './../../server/services'
import Modal from './../components/Modal.jsx'

class CartPage extends React.PureComponent {
    state = {
        cartItems : [],
        isModalVisible : false //TODO: Duplicate in itempage...
    }

    static propTypes = {
        cartItemIds: PropTypes.arrayOf(PropTypes.shape(String)).isRequired,
        dispatch: PropTypes.func.isRequired,
        // userId: PropTypes.   
    };
    
    componentDidMount(){
        this.fetchItems()
    }
    
    handleModal = () => {
        console.log('Handle modal was called!')
        this.setState({isModalVisible : !this.state.isModalVisible})
    }

    hideModal = () => {
        console.log('Modal is hidden')
        this.setState({isModalVisible: false})
    }

    fetchItems = () => {
        const promises = this.props.cartItemIds.map(itemId => services.getItem({itemId}))
        Promise.all(promises).then( items => {
            this.setState({
                cartItems : items
            })
        })
        .catch(err => {
            console.log(err)
            toast.error('Failed fetching items')
        })
    }

    componentDidUpdate(prevProps){
        const prevPropIds = prevProps.cartItemIds.join('')
        const currentIds = this.props.cartItemIds.join('')
        if(prevPropIds !== currentIds){
            this.fetchItems()
        }
    }

    calcNumbers = () => {
        const VAT = 20;
        const sum = Math.round(this.state.cartItems.reduce((acc, item) => acc + item.price, 0));
        const taxes = Math.round(sum / 100 * VAT);
        return {
            sum, taxes
        };
    };

    handleTrash = (_id) => {
        this.props.dispatch(removeItem(_id))
    }

    render() {
        const {sum, taxes} = this.calcNumbers();
        return (
            <div className={"spacer"}>
                <div className={"box cart"}>
                    <Table
                        onTrash={this.handleTrash}
                        rows={this.state.cartItems}
                    />
                </div>
                <div className={"box cart_summary"}>
                    <table>
                        <tbody>
                            <tr><td>Vahesumma</td><td>{sum} €</td></tr>
                            <tr><td>Maksud</td><td>{taxes} €</td></tr>
                            <tr><td>Kokku</td><td>{taxes + sum} €</td></tr>
                            <tr>
                                <td></td>
                                <td><div className="cart-page-buy-item"  onClick={this.handleModal}>Vormista ost</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Modal isModalVisible={this.state.isModalVisible} hideModal={this.hideModal} price={taxes + sum}/>
            </div>
        );
    }
}

const Table = ({rows, onTrash}) => {
    return (
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Toode</div>
                <div className={"cell cell--grow"}>Nimetus</div>
                <div className={"cell"}>Kategooria</div>
                <div className={"cell cell--right"}>Summa</div>
                <div className={"cell cell--small"}></div>
            </div>
            {rows.map( (row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
        </div>
    );
};

Table.propTypes = {
    rows: PropTypes.array.isRequired,
    onTrash: PropTypes.func.isRequired,
};

const Row = ({_id, title, imgSrc, category, price, onTrash}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"cell cell--grow"}>
                {title}
            </div>
            <div className={"cell"}>
                {category}
            </div>
            <div className={"cell cell--right"}>
                {price} €
            </div>
            <div className={"cell cell--small cell--center"}>
                <IoIosTrash width="50" height="50" title={"Eemalda "}  onClick={()=> onTrash(_id)}/>
            </div>
        </div>
    );
};

export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

Row.propTypes = {
    ...ItemProps,
    onTrash: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
    return {
        cartItemIds: selectors.getCart(store)
    };
};

export default connect(mapStateToProps)(CartPage);