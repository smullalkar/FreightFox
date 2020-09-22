import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import Data from '../Pagination/Data'
import Filters from '../Filters/Filters'
import { perPage } from '../../Redux/Actions'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            perpage: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { perPage } = this.props
        return (
            <div className='pb-5'>
                <Filters />
                <Data />
                <Pagination />
                <div className='row '>
                    <input className='col-lg-2 col-md-2 col-sm-6 col-6 offset-lg-4 offset-md-4 offset-2 offset-sm-2' type='number' name='perpage' onChange={this.handleChange} placeholder='Change items per page here..'></input>
                    <button className='col-lg-2 col-md-2 col-sm-3 col-2 btn btn-dark' onClick={() => perPage(this.state.perpage)}>Submit</button>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        page: state.page,
        data: state.data,
    }
}

const mapDispatchToProps = dispatch => ({
    perPage: (payload) => dispatch(perPage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)