const drawerStateReducer = (state, action) => {
    switch(action.type) {
        case 'OPEN_DRAWER' : {
            return {
                ...state,
                open: true,
                room: action.room
            }
        }
        case 'CLOSE_DRAWER' : {
            return {
                ...state,
                open: false,
                room: undefined
            }
        }
        default: {
            return state
        }
    }
}

export default drawerStateReducer;