const officeStateReducer = (state, action) => {
    switch(action.type) {
        case 'OPEN_DRAWER' : {
            return {
                ...state,
                drawerOpen: true,
                currentRoom: action.room
            }
        }
        case 'CLOSE_DRAWER' : {
            return {
                ...state,
                drawerOpen: false,
                currentRoom: undefined
            }
        }
        case 'CLOSE_WELCOME_MODAL' : {
            return {
                ...state,
                welcomeModalOpen: false
            }
        }
        case 'SET_CURRENT_CHARACTER' : {
            return {
                ...state,
                currentCharacter: action.character
            }
        }
        default: {
            return state
        }
    }
}

export default officeStateReducer;