import React from 'react';
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    
    if(props.error){
        return <h1>Err: No smurfs found</h1>
    }
    if (props.loading) {
        return <h1>⌛Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.characters.map(smurf => {
            return <Smurf smurf={smurf} />
        })}
        
    </div>);
}

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.