import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class SizeMenu extends React.Component {

   constructor(props) {
      super(props);

      this.initializeMenu = this.initializeMenu.bind(this);
   };

   static propTypes = {
      handleSelectSize: PropTypes.func,
      handleSubmitSize: PropTypes.func,
      initialSize: PropTypes.func,
      pizzaSizes: PropTypes.arrayOf(PropTypes.shape({
         __typename: PropTypes.string,
         basePrice: PropTypes.number,
         maxToppings: PropTypes.number,
         name: PropTypes.string,
         toppings: PropTypes.arrayOf(PropTypes.shape({
            __typename: PropTypes.string,
            defaultSelected: PropTypes.bool,
            topping: PropTypes.shape({
               __typename: PropTypes.string,
               name: PropTypes.string,
               price: PropTypes.number
            })
         }))
      }))
   };

   initializeMenu(){
      let pizza = this.props.pizzaSizes.find(pizza => {
         return pizza.name === this.props.selectedSize
      });
      this.props.initialSize(pizza);
   };

   componentDidMount() {
      this.initializeMenu();
   };

   render() {
      return (
         <div>
            <Row>
               <Col xs={4} xsOffset={4}>
                  <h2>Choose a size:</h2>
                  <select 
                     onChange={this.props.handleSelectSize} 
                     value={this.props.selectedSize}>

                     {this.props.pizzaSizes.map(size => {
                        return <option 
                           key={size.name} 
                           value={size.name}>
                           {size.name.toUpperCase()}
                        </option>
                     })}
                  </select>
                  <br />
                  <span 
                     className="button" 
                     onClick={this.props.handleSubmitSize}>
                     Continue 
                  </span>
               </Col>
            </Row>
         </div>
      );
   };
};
