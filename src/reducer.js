export const initialState = {
    user: null,
    accessToken: null,
    playlists: [],
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
        
        case "SET_TOKEN":
            return {
                ...currentState,
                accessToken: action.token,
            };
        
        case "SET_PLAYLISTS":
            return {
                ...currentState,
                playlists: action.playlists,
            }

        default:
            return currentState;
    }
};


