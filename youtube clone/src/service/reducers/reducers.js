import { ADD_TO_CARD } from "../constant";

const initailState = {
    cardData: []
}

export default function cardItem(state = initailState, action) {
    switch (action.type) {
        case ADD_TO_CARD:
            console.log("reducer",action);
            return {
                ...state,
                cardData: action.data
            }
            break
        default:
            return state
    }
}