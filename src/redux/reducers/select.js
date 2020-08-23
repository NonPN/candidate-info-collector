const selectReducer = (state = false, action) => {
    switch (action.type) {
        case 'CLICKED':
            return !state
        default:
            return state
    }
}

export default selectReducer