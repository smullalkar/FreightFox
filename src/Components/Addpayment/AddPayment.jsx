import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPayment } from '../../Redux/Actions'
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
import "react-datepicker/dist/react-datepicker.css";

class AddPayment extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {
                paymentId: uuidv4(),
            },
            orderDate: '',
            errors: {}
        }
    };

    handleChange = (e) => {
        let fields = this.state.fields;
        if (e.target.name === 'orderDate') {
            let date = new Date(e.target.value)
            let d = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
            this.setState({
                orderDate: d
            });
        }
        else {
            fields[e.target.name] = e.target.value;
            this.setState({
                fields
            });
        }
    }

    submituserRegistrationForm = (e) => {
        const {
            addPayment
        } = this.props
        if (this.validateForm()) {
            addPayment({fields: this.state.fields, orderDate: {orderDate: this.state.orderDate}});
            alert("Payment added successfully");
        }

    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!this.state["orderDate"]) {
            formIsValid = false;
            errors["orderDate"] = "*Please enter the Order date.";
        }

        if (!fields["merchantId"]) {
            formIsValid = false;
            errors["merchantId"] = "*Please enter the Merchant ID.";
        }

        if (!fields["customerEmail"]) {
            formIsValid = false;
            errors["customerEmail"] = "*Please enter your email-ID.";
        }

        if (typeof fields["customerEmail"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["customerEmail"])) {
                formIsValid = false;
                errors["customerEmail"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["amount"]) {
            formIsValid = false;
            errors["amount"] = "*Please enter the amount.";
        }

        if (typeof fields["amount"] !== "undefined") {
            if (!fields["amount"].match(/^[1-9]\d*$/)) {
                formIsValid = false;
                errors["amount"] = "*Please enter valid amount.";
            }
        }

        if (!fields["paymentStatus"]) {
            formIsValid = false;
            errors["paymentStatus"] = "*Please select the Payment Status.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        const pStatus = ['Initiated', 'Failed', 'Dropped', 'Success', 'Refunded']
        console.log(this.state)
        return (
            <div>
                <h3 className='text-center'>Add Payment</h3>
                <div className='form-group col-lg-6 col-md-8 col-sm-10 col-12 offset-lg-3 offset-md-2 offset-sm-1 offset-0 p-5'>
                    <div className="form-group row">
                        <label className="font-weight-bold col-4 col-form-label">Order date</label>
                        <div className="col-12">
                            <input
                                name='orderDate'
                                value={this.state.fields.orderDate}
                                onChange={this.handleChange}
                                className="form-control"
                                type="date"
                            />
                        </div>
                    </div>
                    <div>{this.state.errors.orderDate}</div>
                    <div className="form-group">
                        <label className='font-weight-bold'>Merchant ID</label>
                        <input
                            className='form-control'
                            name='merchantId'
                            type="text"
                            value={this.state.fields.merchantId}
                            onChange={this.handleChange}
                            placeholder="Merchant ID"
                        />
                    </div>
                    <div>{this.state.errors.merchantId}</div>
                    <div className="form-group">
                        <label className='font-weight-bold'>Email ID:</label>
                        <input
                            className='form-control'
                            name='customerEmail'
                            type="text"
                            value={this.state.fields.customerEmail}
                            onChange={this.handleChange}
                            placeholder="Email ID"
                        />
                    </div>
                    <div>{this.state.errors.customerEmail}</div>
                    <div className="form-group">
                        <label className='font-weight-bold'>Amount:</label>
                        <input
                            className='form-control'
                            name='amount'
                            type="text"
                            value={this.state.fields.amount}
                            onChange={this.handleChange}
                            placeholder="Amount"
                        />
                    </div>
                    <div>{this.state.errors.amount}</div>
                    <div className="form-group">
                        <label className='font-weight-bold'>Payment Status</label>
                        <select
                            className="custom-select form-control"
                            name='paymentStatus'
                            type="text"
                            value={this.state.fields.paymentStatus}
                            onChange={this.handleChange}
                        >
                            <option defaultValue>Payment Status</option>
                            {
                                pStatus && pStatus.map(s => <option key={s} value={s}>{s}</option>)
                            }
                        </select>
                    </div>
                    <div>{this.state.errors.paymentStatus}</div>
                    <div className='d-flex justify-content-between'>
                        <button
                            className='btn btn-danger'
                            onClick={() => this.props.history.push('/')}
                        >
                            Cancel
                        </button>
                        <button
                            className='btn btn-dark'
                            onClick={this.submituserRegistrationForm}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPayment)