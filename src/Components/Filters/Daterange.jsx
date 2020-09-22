import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { filterByDateRange } from '../../Redux/Actions'
import { connect } from 'react-redux'


const Daterange = ({
    filterByDateRange
}) => {
    const [value, onChange] = useState([new Date(), new Date()]);
    console.log(value)
    return (
        <div className='mt-lg-3 mt-md-3 mt-sm-2 mt-2 col-sm-10 col-10 col-md-12 col-lg-12'>
            <h3>FILTER BY DATE RANGE</h3>
            <DateRangePicker
                onChange={onChange}
                value={value}
            />
            <button
                className='btn btn-dark m-3 mx-sm-3 mx-md-3 mx-lg-3'
                onClick={() => filterByDateRange(value)}
            >SUBMIT</button>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterByDateRange: a => dispatch(filterByDateRange(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Daterange);