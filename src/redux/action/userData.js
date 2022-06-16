import {ADD_USER_ID} from '../constants'

export const Adduserid = (id) =>{
    return {
        type : ADD_USER_ID,
        payload : id
    }
}

export const Removeuserid = (id) =>{
    return {
        type : ADD_USER_ID,
        payload : id
    }
}