import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

class CartLink extends React.Component {

   static propTypes = {
      quantity: PropTypes.number
   }

   render() {
      return (
         <Row>
            <Col xs={2} xsOffset={10}>
               <div className="cartLink">
                  <Link to='/cart'>({this.props.quantity})Cart</Link>
               </div>
            </Col>
         </Row>
      )
   }
}

export default CartLink
