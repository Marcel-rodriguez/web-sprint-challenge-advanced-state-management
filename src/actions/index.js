import axios from 'axios';

export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'

export const getSmurfs = () => (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
    .then(resp => {
        console.log(resp)
        dispatch({type: SUCCESS, payload: resp.data})
    }).catch(err => dispatch(error(err)))
}

export const error = (err) => {
    return{
        type: ERROR,
        payload: err
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.