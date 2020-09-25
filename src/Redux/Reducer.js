import {
    CHANGE_PAGE_NO,
    SORT_BY_AMOUNT,
    SORT_BY_PID,
    SORT_BY_EMAIL,
    FILTER_PAYMENT_STATUS,
    FILTER_DATERANGE,
    DELETE_PAYMENT,
    EDIT_PAYMENT,
    ADD_PAYMENT,
    CHANGE_PERPAGE
} from "./Actiontypes";
import sampleData from '../Components/Data/data.json'
import { loadData, saveData } from './LocalStorage'

let persistData = loadData("state")
console.log(persistData)

const initState =  {
    data: persistData !== null && persistData.length !== 0 ? persistData : sampleData,
    page: 1,
    perPage: 5,
    length: 0,
    totalPages: Math.ceil(sampleData.length / 5),
    isLoadng: false,
    error: false,
    filteredData: [],
    isFilter: false,
    edit: false
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_PAYMENT:
            let d1 = [...state.data, payload]
            saveData('state', d1)
            return {
                ...state,
                data: d1
            };
        case CHANGE_PAGE_NO:
            if (payload < 1)
                return state
            return {
                ...state,
                page: payload
            }
        case CHANGE_PERPAGE:
            let t = Math.ceil(state.data.length/Number(payload))
            return {
                ...state,
                perPage: Number(payload),
                totalPages: t
            }
        case SORT_BY_AMOUNT:
            var dat1 = payload === 'asc' ? [...state.data].sort((a, b) => Number(a.amount) - Number(b.amount)) : [...state.data].sort((a, b) => Number(b.amount) - Number(a.amount))
            return {
                ...state,
                data: dat1
            }
        case SORT_BY_PID:
            var dat2 = payload === 'asc' ? [...state.data].sort((a, b) => Number(a.paymentId) - Number(b.paymentId)) : [...state.data].sort((a, b) => Number(b.paymentId) - Number(a.paymentId))
            return {
                ...state,
                data: dat2
            }
        case SORT_BY_EMAIL:
            var dat3 = payload === 'asc' ? [...state.data].sort((a, b) => a.customerEmail > b.customerEmail) : [...state.data].sort((a, b) => b.customerEmail > a.customerEmail)
            return {
                ...state,
                data: dat3
            }
        case FILTER_PAYMENT_STATUS:
            console.log('payload', payload)
            if (payload === 'All') {
                let totalPages = Math.ceil(state.data.length / state.perPage)
                return {
                    ...state,
                    isFilter: false,
                    filteredData: state.data,
                    totalPages: totalPages
                }
            }
            let filData = [...state.data].filter(item => {
                return item.paymentStatus === payload
            })
            var totalPages = Math.ceil(filData.length / state.perPage)
            return {
                ...state,
                isFilter: true,
                filteredData: filData,
                totalPages: totalPages
            }
        case FILTER_DATERANGE:
            var startDate = new Date(payload[0]);
            var endDate = new Date(payload[1]);

            var resultProductData = state.data.filter(a => {
                var date = new Date(a.orderDate);
                return (date >= startDate && date <= endDate);
            });
            console.log(resultProductData)
            var totalPages = Math.ceil(resultProductData.length / state.perPage)
            return {
                ...state,
                isFilter: true,
                filteredData: resultProductData,
                totalPages: totalPages
            }
        case DELETE_PAYMENT:
            let d2 = [...state.data].filter(item => {
                return item.paymentId !== payload
            })
            saveData('state', d2)
            return {
                ...state,
                data: d2
            }
        case EDIT_PAYMENT:
            var edit_data = []
            for (var k = 0; k < state.data.length; k++) {
                if (state.data[k].paymentId === payload.paymentId) {
                    edit_data.push(payload)
                }
                else {
                    edit_data.push(state.data[k])
                }
            }
            saveData('state', edit_data)
            return {
                ...state,
                data: edit_data,
                edit: false
            }
        default:
            return state;
    }
};