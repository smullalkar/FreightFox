import {
    CHANGE_PAGE_NO
} from "./Actiontypes";
import sampleData from '../Components/Data/data.json'

const initState = {
    data: sampleData,
    page: 1,
    perPage: 5,
    length: 0,
    totalPages: Math.ceil(sampleData.length/5),
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