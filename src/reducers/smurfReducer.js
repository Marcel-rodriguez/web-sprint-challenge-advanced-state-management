import { ADD_SMURF } from "../actions/smurfAction";

const initialState = {
    smurfs: [
        {name:"Test1", position:"Tester", nickname:"Testing", description:"Testing Smurfs"}
    ]
}

const smurfReducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, {name: action.payload, position: action.payload, nickname: action.payload, description: action.payload}]
            }
        default:
            return state
    }
}

export default smurfReducer