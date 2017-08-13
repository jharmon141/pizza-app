import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

let quantityNums = [];

for (let i = 1; i < 11; i++) {
   quantityNums.push(i);
};

export default class CartItem extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         quantity: 0
      };

      this.updatePizza = this.updatePizza.bind(this);
   }

   static propTypes = {
      handleUpdatePizza: PropTypes.func.isRequired,
      removePizza: PropTypes.func.isRequired,
      pizza: PropTypes.shape({
         id: PropTypes.number.isRequired,
         size: PropTypes.string.isRequired,
         basePrice: PropTypes.number.isRequired,
         toppings: PropTypes.arrayOf(PropTypes.shape({
            __typename: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
         }).isRequired).isRequired
      }).isRequired   
   };

   updatePizza(event) {
      let pizza = this.props.pizza;
      pizza.quantity = Number(event.target.value);
      this.props.handleUpdatePizza(pizza);
      this.setState({
         quantity: event.target.value
      });
   };

   componentWillMount() {
      this.setState({
         quantity: this.props.pizza.quantity
      });
   };

   render() {
      return(
         <div>
            <Row>
               <Col xs={2} xsOffset={1}>
                  <h4 >{this.props.pizza.size}</h4>
               </Col>
               <Col  className="cartItem" xs={3}>
                  <span>
                     {this.props.pizza.toppings.map((topping, i) => {
                        if (this.props.pizza.toppings[i+1]) {
                           return <span key={topping.name}>{topping.name}, </span>
                        }
                        else {
                           return <span key={topping.name}>{topping.name}</span>
                        }
                     })}
                  </span>
               </Col>
               <Col xs={2}> 
                  <select 
                     className="quantitySelect"
                     onChange={this.updatePizza} 
                     value={this.state.quantity}>
                     {quantityNums.map((num) => {
                        return <option
                           key={num}
                           value={num}>
                           {num}
                        </option>
                     })}
                  </select>
               </Col>
               <Col xs={1}>
                  <h4>${(this.props.pizza.basePrice * this.props.pizza.quantity).toFixed(2)}</h4>
               </Col>
               <Col xs={1}>
                  <h4 className="delete" onClick={() => this.props.removePizza(this.props.pizza)}>X</h4>
               </Col>
            </Row>
         </div>
      );
   };
};
