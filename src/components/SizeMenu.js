import React from 'react'
import { Col, Row } from 'react-bootstrap'

class SizeMenu extends React.Component {

    componentDidMount() {
        let pizza = this.props.pizzaSizes.find(pizza => {
            return pizza.name === this.props.selectedSize
        })
        this.props.initialSize(pizza)
    }

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
        )
    }
}

export default SizeMenu
