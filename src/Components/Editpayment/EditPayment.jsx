import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPayment } from '../../Redux/Actions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditPayment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentId: "",
            startDate: '',
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

    componentDidMount = () => {
        let { match, data } = this.props
        let id = match.params.id
        var d = data.filter(item => {
            return item.paymentId == id
        })
        console.log(d)
        let date = new Date(d[0].orderDate)
        let p = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
        this.setState({
            paymentId: d[0].paymentId,
            orderDate: p,
            startDate: new Date(d[0].orderDate),
            merchantId: d[0].merchantId,
            customerEmail: d[0].customerEmail,
            amount: d[0].amount,
            paymentStatus: d[0].paymentStatus
        })
    }

    render() {
        const {
            editPayment
        } = this.props
        const pStatus = ['Initiated', 'Failed', 'Dropped', 'Success', 'Refunded']
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
                        className="custom-select col-6 mt-2 mb-3 mx-3 form-control"
                        name='paymentStatus'
                        onChange={this.handleChange}
                        value={this.state.paymentStatus}
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
                            editPayment(this.state)
                            setTimeout(() => {
                                this.props.history.push('/');
                            }, 300);
                        }}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    console.log(state.filteredData)
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => ({
    editPayment: (payload) => dispatch(editPayment(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPayment)