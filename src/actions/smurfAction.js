import axios from 'axios'
export const ADD_SMURF = 'ADD_SMURF'


export const addSmurf = (newSmurf) => {
    axios.post('http://localhost:3333/smurfs', {
                name: newSmurf.name,
                position: newSmurf.position,
                nickname: newSmurf.nickname,
                description: newSmurf.description
            })
            .then(resp => {
                console.log(resp)
            }).catch(err => console.error(err))
}