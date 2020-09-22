import React from 'react'
// import { connect } from 'react-redux'
import Pagination from '../Pagination/Pagination'
import Data from '../Pagination/Data'
import Filters from '../Filters/Filters'

export default function Home() {
    return (
        <div className='pb-5'>
            <Filters/>
            <Data />
            <Pagination />
        </div>
    )
}
