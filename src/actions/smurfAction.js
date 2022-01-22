import axios from 'axios'
export const ADD_SMURF = 'ADD_SMURF'


export const addSmurf = (newSmurf) => (dispatch) => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(resp => {
                console.log(resp)
                dispatch({type: ADD_SMURF, payload: resp.data})
            }).catch(err => console.error(err))
        }