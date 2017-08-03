import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }

        this.calculateTotal = this.calculateTotal.bind(this)
        this.removePizza = this.removePizza.bind(this)
    }

    static propTypes = {
        handleRemovePizza: PropTypes.func.isRequired,
        store: PropTypes.shape({
            pizzas: PropTypes.arrayOf(PropTypes.shape({
                pizzas: PropTypes.shape({
                    size: PropTypes.string.isRequired,
                    toppings: PropTypes.arrayOf(PropTypes.shape({
                        __typename: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        price: PropTypes.number.isRequired
                    }).isRequired).isRequired
                }).isRequired
            }).isRequired).isRequired
        }).isRequired
    }

    removePizza(pizza) {
        this.props.handleRemovePizza(pizza)
        setTimeout(this.calculateTotal, 0)
    }

    calculateTotal(){
        let sum = 0 
        this.props.store.pizzas.forEach(pizza => {
            sum += pizza.pizzas.total 
            this.setState({total: sum})
        })
    }

    componentDidMount() {
        this.calculateTotal()
    }

    render() {
        if (this.props.store.pizzas.length === 0) {
            return(
                <div>
                    <Row>
                        <h1>Your cart is empty</h1>
                    </Row>
                    <Row>
                        <Link className="cart" to='/'>
                            <span
                                className="button">
                                Add pizzas
                            </span>
                        </Link>
                    </Row>
                </div>
            )
        }

        return(
            <div>
                <Row>
                    <Col xs={4} xsOffset={8}>
                        <div className="cartLink">
                            <Link to='/'>Go back</Link>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <h1>Your Cart</h1>
                </Row>

                <Row>
                    <Col xs={2} xsOffset={1}>
                        <h4 className="title">Sizes</h4>
                    </Col>
                    <Col xs={3}> 
                        <h4 className="title">Toppings</h4>
                    </Col>
                    <Col xs={2}> 
                        <h4 className="title">Price</h4>
                    </Col>
                    <Col xs={2}> 
                        <h4 className="title">Remove</h4>
                    </Col>
                </Row>

                <Row>
                    {this.props.store.pizzas.map((pizza, index) => {
                        return(
                            <Row key={index}>
                                <Col xs={2} xsOffset={1}>
                                    <h4 >{pizza.pizzas.size}</h4>
                                </Col>
                                <Col  className="cartItem" xs={3}>
                                    <span>
                                        {pizza.pizzas.toppings.map((topping, i) => {
                                            if (pizza.pizzas.toppings[i+1]) {
                                                return <span key={topping.name}>{topping.name}, </span>
                                            }
                                            else {
                                                return <span key={topping.name}>{topping.name}</span>
                                            }
                                        })}
                                    </span>
                                </Col>
                                <Col xs={2}>
                                    <h4>${pizza.pizzas.total.toFixed(2)}</h4>
                                </Col>
                                <Col xs={2}>
                                    <h4 className="delete" onClick={() => this.removePizza(pizza)}>X</h4>
                                </Col>
                            </Row>
                        )
                    })}
                </Row>
                <Row>
                    <Col xs={4} xsOffset={1}>
                        <h4>Grand Total: ${this.state.total.toFixed(2)}</h4>
                    </Col>
                </Row>
            </div>
        )
    }
}

