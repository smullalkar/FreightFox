import {
    CHANGE_PAGE_NO
} from "./Actiontypes";
import sampleData from '../Components/Data/data.json'

let perPage = 10
let totalPages = Math.ceil(sampleData.length/perPage)
console.log(totalPages)

const initState = {
    data: sampleData,
    page: 1,
    perPage: perPage,
    length: 0,
    totalPages: totalPages,
    isLoadng: false,
    error: false
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case CHANGE_PAGE_NO:
            if (payload < 1)
                return state
            return {
                ...state,
                page: payload
            }
        default:
            return state;
    }
};