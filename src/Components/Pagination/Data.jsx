import React from 'react'
import { connect } from 'react-redux'

const Data = ({
    page,
    data,
    perPage
}) => {
    return (
        <div>
            {
                data && data.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(item =>
                    <div key={item.paymentId}>
                        <div>PAYMENT ID: {item.paymentId}</div>
                        <div>ORDERDATE: {item.orderDate}</div>
                        <div>MERCHANT ID: {item.merchantId}</div>
                        <div>CUSTOMER EMAIL: {item.customerEmail}</div>
                        <div>AMOUNT: {item.amount}</div>
                        <div>PAYMENT STATUS: {item.paymentStatus}</div>
                        <hr/>
                    </div>
                )
            }
        </div>
    )
}


const mapStateToProps = state => ({
    page: state.page,
    data: state.data,
    perPage: state.perPage
})

export default connect(mapStateToProps)(Data)