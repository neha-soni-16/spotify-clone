export const initialState = {
    user: null,
    userPlaylist: [],
    playing: false,
    currentPlayingItems: null,
};

export const reducer = (currentState, action) => {
    console.log("action" , action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...currentState,
                user: action.user,
            };

        default:
            return currentState;
    }
};


