export const addInfo = (info) => {
    return {
        type: 'ADD_INFO',
        payload: info
    }
}

export const removeInfo = (index) => {
    return {
        type: 'REMOVE_INFO',
        payload: index
    }
}

export const initiateInfo = (info) => {
    return {
        type: 'INITIATE_INFO',
        payload: info
    }
}

export const selectAll = () => {
    return {
        type: 'CLICKED'
    }
}