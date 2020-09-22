import React from 'react'
import { connect } from 'react-redux'

const Data = ({
    page,
    data,
    perPage
}) => {
    return (
        <div className='container p-5'>
            <table className="table table-hover">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">PAYMENT ID</th>
                        <th scope="col">ORDER DATE</th>
                        <th scope="col">MERCHANT ID</th>
                        <th scope='col'>CUSTOMER EMAIL</th>
                        <th scope='col'>AMOUNT</th>
                        <th scope='col'>PAYMENT STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(item =>
                            <tr key={item.paymentId}>
                                <td>{item.paymentId}</td>
                                <td>{item.orderDate}</td>
                                <td>{item.merchantId}</td>
                                <td>{item.customerEmail}</td>
                                <td>{item.amount}</td>
                                <td>{item.paymentStatus}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = state => ({
    page: state.page,
    data: state.data,
    perPage: state.perPage
})

export default connect(mapStateToProps)(Data)