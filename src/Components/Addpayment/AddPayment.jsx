import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPayment } from '../../Redux/Actions'
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
import "react-datepicker/dist/react-datepicker.css";

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentId: uuidv4(),
            startDate: new Date(),
            orderDate: "",
            merchantId: "",
            customerEmail: "",
            amount: "",
            paymentStatus: ""
        }
    }

    handleDate = date => {
        let d = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
        this.setState({
            startDate: date,
            orderDate: d
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {
            addPayment
        } = this.props
        const pStatus = ['Initiated', 'Failed', 'Dropped', 'Success', 'Refunded']
        console.log(this.state)
        return (
            <div>
                <div className='form-group offset-lg-4 offset-md-4 offset-sm-2 offset-2 mt-5'>
                    <DatePicker
                        className='m-3 form-control'
                        name='orderDate'
                        selected={this.state.startDate}
                        onChange={this.handleDate}
                    />
                    <input
                        className='col-lg-6 col-md-6 col-sm-8 col-10 m-3 form-control'
                        name='merchantId'
                        value={this.state.merchantId}
                        onChange={this.handleChange}
                        placeholder="Merchant Id"
                    />
                    <input
                        className='col-lg-6 col-md-6 col-sm-8 col-10 m-3 form-control'
                        name='customerEmail'
                        value={this.state.customerEmail}
                        onChange={this.handleChange}
                        placeholder="Customer Email"
                    />
                    <input
                        className='col-lg-6 col-md-6 col-sm-8 col-10 m-3 form-control'
                        name='amount'
                        value={this.state.amount}
                        onChange={this.handleChange}
                        placeholder="Amount"
                    />
                    <select
                        className="custom-select col-lg-6 col-md-6 col-sm-8 col-10 mt-2 mb-3 mx-3 form-control"
                        name='paymentStatus'
                        onChange={this.handleChange}
                    >
                        <option defaultValue>Payment Status</option>
                        {
                            pStatus && pStatus.map(s => <option key={s} value={s}>{s}</option>)
                        }
                    </select>
                    <br/>
                    <button
                        className='btn btn-dark ml-3'
                        onClick={() => {
                            addPayment(this.state)
                            setTimeout(() => {
                                this.props.history.push('/');
                            }, 300);
                        }}
                    >
                        ADD
                    </button>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => ({
    addPayment: (payload) => dispatch(addPayment(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)