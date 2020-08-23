const infoReducer = (state = [], action) => {
    let arr = []
    switch (action.type) {
        case 'ADD_INFO':
            arr = [...state, action.payload]
            return arr
        case 'REMOVE_INFO':
            state.splice(action.payload, 1)
            arr = [...state]
            return arr
        case 'INITIATE_INFO':
            return action.payload
        default:
            return state
    }
}

export default infoReducer