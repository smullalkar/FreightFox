import React, { Component } from 'react'
import { sortByAmount, sortByPid, sortByEmail, sortByDate, filterByPaymentStatus } from '../../Redux/Actions'
import { connect } from 'react-redux'
import Daterange from './Daterange'

class Filters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paymentStatus: '',
            startDate: '',
            endDate: ''
        }
    }


    render() {
        const { sortByAmount, sortByPid, sortByEmail, sortByDate, filterByPaymentStatus } = this.props
        const pStatus = ['All', 'Initiated', 'Failed', 'Dropped', 'Success', 'Refunded']
        return (
            <div className='pt-5 text-center'>
                <h3>SORTING</h3>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-5 col-sm-10 col-10 mt-3'>
                        <div className='mb-2'>SORT BY AMOUNT</div>
                        <select className='custom-select'>
                            <option defaultValue>Sort By Amount</option>
                            <option onClick={() => { sortByAmount('asc') }} value='asc'>asc</option>
                            <option onClick={() => { sortByAmount('desc') }} value='desc'>desc</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-10 col-10 mt-3'>
                        <div className='mb-2'>SORT BY PAYMENT ID</div>
                        <select className='custom-select'>
                           <option defaultValue>Sort By Payment ID</option>
                            <option onClick={() => { sortByPid('asc') }} value='asc'>asc</option>
                            <option onClick={() => { sortByPid('desc') }} value='desc'>desc</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-10 col-10 mt-3'>
                        <div className='mb-2'>SORT BY EMAIL</div>
                        <select className='custom-select'>
                            <option defaultValue>Sort By Email</option>
                            <option onClick={() => { sortByEmail('asc') }} value='asc'>asc</option>
                            <option onClick={() => { sortByEmail('desc') }} value='desc'>desc</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-10 col-10 mt-3'>
                        <div className='mb-2'>SORT BY DATE</div>
                        <select className='custom-select'>
                            <option defaultValue>Sort By Date</option>
                            <option onClick={() => { sortByDate('asc') }} value='asc'>asc</option>
                            <option onClick={() => { sortByDate('desc') }} value='desc'>desc</option>
                        </select>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-10 col-10'>
                        <h3 className='mt-5'>FILTER BY PAYMENT STATUS</h3>
                        <div className="form-group col-lg-8 offset-lg-2">
                            <select
                                className="custom-select"
                                onChange={e => filterByPaymentStatus(e.target.value)}
                            >
                                <option defaultValue>Payment Status</option>
                                {
                                    pStatus && pStatus.map(s => <option key={s} value={s}>{s}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <Daterange className='col-lg-6 col-md-6 col-sm-7 col-7' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sortByAmount: a => dispatch(sortByAmount(a)),
        sortByPid: a => dispatch(sortByPid(a)),
        sortByEmail: a => dispatch(sortByEmail(a)),
        sortByDate: a => dispatch(sortByDate(a)),
        filterByPaymentStatus: a => dispatch(filterByPaymentStatus(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);