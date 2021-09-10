import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.


export const FETCHING = 'FETCHING'
export const FET_SUCCESS = 'FET_SUCCESS'
export const FET_FAIL = 'FET_FAIL'
export const ADD_SMURF = 'ADD_SMURF'
export const ERROR = 'ERROR'




export const fetchSmurfs = ()=> dispatch =>{
    dispatch(fetching())

    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
        dispatch(fetchingSuccess(res.data))
    })
    .catch(err=>{
        console.error(err)
    })
}


export const fetching = ()=>({type:FETCHING})

export const fetchingSuccess = (data)=>{return({type:FET_SUCCESS, payload:data})}

export const fetchingFailure = ()=>{return({type:FET_FAIL})}

export const addSmurf = (data)=>{return({type:ADD_SMURF, payload:data})}

export const setError = (error)=>{return({type:ERROR, payload:error})}

