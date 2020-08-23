const infoReducer = (state = [], action) => {
    let arr = []
    switch (action.type) {
        case 'ADD_INFO':
            arr = [...state, action.payload]
            return arr
        case 'REMOVE_INFO':
            let n = 0
            state.map((item, index) => {
                if (item.id == action.payload) {
                    n = index
                }
            })
            arr = [...state.slice(0, n), ...state.slice(n + 1, state.length)]
            return arr
        case 'INITIATE_INFO':
            return action.payload
        default:
            return state
    }
}

export default infoReducer