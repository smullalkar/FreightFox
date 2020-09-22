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
        <div>
            <h5>Filter by Date Range</h5>
            <DateRangePicker
                onChange={onChange}
                value={value}
            />
            <button
                className='btn btn-dark mx-3'
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