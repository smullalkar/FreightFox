import {
    CHANGE_PAGE_NO,
    SORT_BY_AMOUNT,
    SORT_BY_PID,
    SORT_BY_EMAIL,
    FILTER_PAYMENT_STATUS,
    FILTER_DATERANGE,
    DELETE_PAYMENT
} from "./Actiontypes";

export const changePage = payload => ({
    type: CHANGE_PAGE_NO,
    payload
})


export const sortByAmount = payload => ({
    type: SORT_BY_AMOUNT,
    payload,
})

export const sortByPid = payload => ({
    type: SORT_BY_PID,
    payload,
})

export const sortByEmail = payload => ({
    type: SORT_BY_EMAIL,
    payload,
})

export const filterByPaymentStatus = payload => ({
    type: FILTER_PAYMENT_STATUS,
    payload,
})

export const filterByDateRange = payload => ({
    type: FILTER_DATERANGE,
    payload,
})

export const deletePayment = payload => ({
    type: DELETE_PAYMENT,
    payload,
})