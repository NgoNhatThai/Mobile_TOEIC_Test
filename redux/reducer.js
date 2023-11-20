import initialState from "./initialState";

var reducer = (state= initialState, action)=>{
    switch (action.type) {
        case 'save':
            console.log(initialState);
            console.log(action.value);
            var score= action.value;
            return score;
        default:
            return state.score;
    }
}

export default reducer;