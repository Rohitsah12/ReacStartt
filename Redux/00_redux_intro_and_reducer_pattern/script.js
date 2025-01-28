
import {createStore} from 'redux';



const initialState={
    post:0,
    name:"Anurag singh",
    age:26,
}

//What redux will do //

//reducer(state,action)  call reducer by passing state
//aur state mein khud hi assign krr lega

// action is a plain javascript object

//{type:'post/increase'}  yeh ek convention h
//let action={
//    type:'increase-post'
//}


//action type ko capital mein likho

const INCREMENT='post/increment';
const DECREMENT='post/decrement';
const INCREASE_BY='post/incrementBy';
const DECREASE_BY='post/decrementBy'

function reducer(state=initialState,action){
    if(action.type===INCREMENT) return {...state,post:state.post+1};
    else if(action.type===DECREMENT) return {...state,post:state.post-1};
    else if(action.type===INCREASE_BY) return {...state,post:state.post+action.payload}
    else if(action.type===DECREASE_BY) return {...state,post:state.post-action.payload}
    return state
}

const  store=createStore(reducer);
console.log(store);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({type:INCREMENT});
store.dispatch({type:DECREMENT});
store.dispatch({type:INCREASE_BY,payload:10})
store.dispatch({type:DECREASE_BY,payload:5})















// let prevState=state;
// function increment(){
//     //Mutating State
//     // state.count+=1; 


//     //immutating
//     //Not mutating
//     state = {...state,count:state.count+1}
// // }
// increment();
// increment();
// increment();


// console.log(state);
