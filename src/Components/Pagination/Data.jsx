import React from 'react'
import { connect } from 'react-redux'
import { deletePayment } from '../../Redux/Actions'
import { Link } from 'react-router-dom'

const Data = ({
    page,
    data,
    perPage,
    isFilter,
    filteredData,
    deletePayment
}) => {
    return (
        <div className='container p-lg-5 p-md-5 p-sm-2 p-2 table-responsive'>
            <table className="table table-hover">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">PAYMENT ID</th>
                        <th scope="col">ORDER DATE</th>
                        <th scope="col">MERCHANT ID</th>
                        <th scope='col'>CUSTOMER EMAIL</th>
                        <th scope='col'>AMOUNT</th>
                        <th scope='col'>PAYMENT STATUS</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isFilter ?
                            filteredData && filteredData.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(item =>
                                <tr key={item.paymentId}>
                                    <td>{item.paymentId}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.merchantId}</td>
                                    <td>{item.customerEmail}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.paymentStatus}</td>
                                    <td><img onClick={() => deletePayment(item.paymentId)} alt='...' className='mr-lg-3' src='/delete.svg' style={{ width: '20px', height: '18px' }} /></td>
                                    <td><Link to={`edit/${item.paymentId}`}><img alt='...' className='mr-lg-3' src='/edit.svg' style={{ width: '20px', height: '18px' }} /></Link></td>
                                </tr>
                            ) :
                            data && data.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(item =>
                                <tr key={item.paymentId}>
                                    <td>{item.paymentId}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.merchantId}</td>
                                    <td>{item.customerEmail}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.paymentStatus}</td>
                                    <td><img alt='...' onClick={() => deletePayment(item.paymentId)} className='mr-lg-3' src='/delete.svg' style={{ width: '20px', height: '18px' }} /></td>
                                    <td><Link to={`edit/${item.paymentId}`}><img alt='...' className='mr-lg-3' src='/edit.svg' style={{ width: '20px', height: '18px' }} /></Link></td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state.filteredData)
    return {
        page: state.page,
        data: state.data,
        perPage: state.perPage,
        isFilter: state.isFilter,
        filteredData: state.filteredData,
        edit: state.edit
    }
}

const mapDispatchToProps = dispatch => ({
    deletePayment: (payload) => dispatch(deletePayment(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)