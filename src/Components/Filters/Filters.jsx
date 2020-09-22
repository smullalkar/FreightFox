import React, { Component } from 'react'
import { sortByAmount, sortByPid, sortByEmail, filterByPaymentStatus } from '../../Redux/Actions'
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
        const { sortByAmount, sortByPid, sortByEmail, filterByPaymentStatus } = this.props
        const pStatus = ['All', 'Initiated', 'Failed', 'Dropped', 'Success', 'Refunded']
        return (
            <div className='pt-3 text-center'>
                <h3>SORTING</h3>
                <div className='d-flex flex-row justify-content-center'>
                    <select className='m-2 custom-select'>
                        <option defaultValue>Sort By Amount</option>
                        <option onClick={() => { sortByAmount('asc') }} value='asc'>asc</option>
                        <option onClick={() => { sortByAmount('desc') }} value='desc'>desc</option>
                    </select>
                    <select className='m-2 custom-select'>
                        <option defaultValue>Sort By Payment ID</option>
                        <option onClick={() => { sortByPid('asc') }} value='asc'>asc</option>
                        <option onClick={() => { sortByPid('desc') }} value='desc'>desc</option>
                    </select>
                    <select className='m-2 custom-select'>
                        <option defaultValue>Sort By Email</option>
                        <option onClick={() => { sortByEmail('asc') }} value='asc'>asc</option>
                        <option onClick={() => { sortByEmail('desc') }} value='desc'>desc</option>
                    </select>
                </div>
                <div>
                    <h3 className='mt-3'>FILTERS</h3>
                    <div className="form-group col-4 offset-4">
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
                    <Daterange/>
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
        filterByPaymentStatus: a => dispatch(filterByPaymentStatus(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);