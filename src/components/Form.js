import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            pickedToppings: [],
            toppingsMax: false ,
            maxNumberOfToppings: 0,
            total: 0
        }

        this.addTopping = this.addTopping.bind(this)
        this.removeTopping = this.removeTopping.bind(this)
        this.handleToppingChange = this.handleToppingChange.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleAddToCart() {
        let pizza = {}
        pizza.size = this.props.pizza.name
        pizza.toppings = this.state.pickedToppings
        pizza.total = this.state.total

        this.props.handleAddPizza(pizza)
        this.setState({submitted: true})
    }

    handleToppingChange(topping) {
        this.state.pickedToppings.includes(topping) ? this.removeTopping(topping) : this.addTopping(topping)
    }

    updateTotal(change, amount) {
        if (change === 'add') {
            let toppingPrice = Number(amount)
            let beginTotal = Number(this.state.total)
            let newTotal = beginTotal + toppingPrice
            this.setState({total: newTotal})
        }
        else if (change === 'subtract') {
            let toppingPrice = Number(amount)
            let beginTotal = Number(this.state.total)
            let newTotal = beginTotal - toppingPrice
            this.setState({total: newTotal})
        }
    }

    addTopping(topping) {
        if (!this.state.toppingsMax) {
            let newPickedToppings = this.state.pickedToppings.concat(topping)
            this.setState({pickedToppings: newPickedToppings})
            this.updateTotal('add', topping.price)
            if (newPickedToppings.length === this.props.pizza.maxToppings) {
                this.setState({toppingsMax: true})
            }
        } else {
            return
        }
    }

    removeTopping(topping) {
        let newToppings = this.state.pickedToppings.filter(each => {
            return each !== topping
        })
        this.setState({pickedToppings: newToppings})
        this.updateTotal('subtract', topping.price)
        if (newToppings.length < this.props.pizza.maxToppings) {
            this.setState({toppingsMax: false})
        }
    }

    componentDidMount() {
        let defaultToppings = []
        let sum = this.props.pizza.basePrice
        this.props.pizza.toppings.forEach(topping => {
            if (topping.defaultSelected) {
                defaultToppings.push(topping.topping)
                sum += topping.topping.price
            }
            this.addTopping(defaultToppings)
        })
        this.setState({total: sum})
        if (this.props.pizza.maxToppings !== null) {
            this.setState({maxNumberOfToppings: this.props.pizza.maxToppings})
        } else {
            this.setState({maxNumberOfToppings: 'Unlimited!'})
        }
    }

    render() {
        if (this.state.submitted) {
            return(
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <h1>Pizza added!</h1>
                        <span
                            className="button"
                            onClick={this.props.resetForm}>
                            Add more pizza 
                        </span>
                        <br />
                        <br />
                        <Link className="cart" to='/cart'>
                            <span
                                className="button">
                                Go to cart
                            </span>
                        </Link>
                    </Col>
                </Row>
            )
        }

        else {
            return(
                <div>
                    <Row className="row">
                        <h2>Size: {this.props.pizza.name.toUpperCase()}</h2>
                        <h4>Base price: ${this.props.pizza.basePrice.toFixed(2)}</h4>
                        <h5>Max number of toppings: {this.state.maxNumberOfToppings}</h5>
                    </Row>
                    <Row>
                        <Col xs={4} xsOffset={2}>
                            <h4>Select your toppings:</h4>
                        </Col>
                        <Col xs={4} xsOffset={0}>
                            <form className="toppings">
                                {this.props.pizza.toppings.map(each => {
                                    if (this.state.toppingsMax && !this.state.pickedToppings.includes(each.topping)) {
                                        return(
                                            <div key={each.topping.name}>
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        onChange={() => this.handleToppingChange(each.topping)}
                                                        defaultChecked={each.defaultSelected}
                                                        name={each.topping.name} 
                                                        value={each.topping} disabled/> 
                                                    {each.topping.name} (${each.topping.price.toFixed(2)})
                                                </label>
                                                <br />
                                            </div>
                                        )
                                    }
                                    return(
                                        <div key={each.topping.name}>
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    onChange={() => this.handleToppingChange(each.topping)}
                                                    defaultChecked={each.defaultSelected}
                                                    name={each.topping.name} 
                                                    value={each.topping}/> 
                                                {each.topping.name} (${each.topping.price.toFixed(2)})
                                            </label>
                                            <br />
                                        </div>
                                    )
                                })}
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Total: ${this.state.total.toFixed(2)}</h4>
                    </Row>
                    <Row>
                        <span
                            className="button"
                            onClick={this.handleAddToCart}>
                            Add to Cart
                        </span>
                        <br />
                        <br />
                        <span
                            className="button"
                            onClick={this.props.resetForm}>
                            Go back
                        </span>
                    </Row>
                </div>
            )
        }
    }
}

export default Form
