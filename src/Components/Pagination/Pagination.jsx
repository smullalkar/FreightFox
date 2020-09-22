import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../../Redux/Actions'


const Pagination = ({
    page,
    totalPages,
    changePage
}) => {
    const pageList = []
    pageList.push(<div className='p-3 btn btn-dark rounded-0' onClick={() => changePage(1)}>First</div>)
    for (let i = page - 1; i >= 0 && i <= page + 2 && i <= totalPages; i++) {
        if (i === page - 1) {
            if (i !== 0)
                pageList.push(<div className='p-3 btn btn-dark rounded-0' key={i} onClick={() => changePage(page - 1)}>Previous</div>)
            continue;
        }
        if (i === page + 2) {
            pageList.push(<div className='p-3 btn btn-dark rounded-0' key={i} onClick={() => changePage(page + 1)}>Next</div>)
            continue;
        }
        pageList.push(<div className='p-3 btn btn-dark rounded-0' key={i} style={{ color: `${page === i ? 'red' : 'white'}` }} onClick={() => changePage(i)}>{i}</div>)
    }
    pageList.push(<div className='p-3 btn btn-dark rounded-0' onClick={() => changePage(totalPages)}>Last</div>)
    return (
        <div className='p-3 btn btn-dark rounded-0' className='d-flex flex-row justify-content-center'>
            {totalPages !== 0 && pageList}
        </div>
    )
}
const mapStateToProps = state => ({
    page: state.page,
    perPage: state.perPage,
    totalPages: state.totalPages
})

const mapDispatchToProps = dispatch => ({
    changePage: (payload) => dispatch(changePage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)