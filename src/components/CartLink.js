import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

class CartLink extends React.Component {

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
