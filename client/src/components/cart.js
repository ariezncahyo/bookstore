import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="container">
                    <h3 class="title">Your Cart</h3>

                    <Table responsive striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Qty,Price@</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Cart;