let reduxState = {
    post: 0,
    name: "Anurag singh",
    age: 26
};
//What redux will do //
//reducer(state,action)  call reducer by passing state
//aur state mein khud hi assign krr lega
// action is a plain javascript object
//{type:'post/increase'}  yeh ek convention h
//let action={
//    type:'increase-post'
//}
function reducer(state, action) {
    if (action.type === 'post/increment') return {
        ...state,
        post: state.post + 1
    };
    else if (action.type === 'post/decrement') return {
        ...state,
        post: state.post - 1
    };
    else if (action.type === 'post/incrementBy') return {
        ...state,
        post: state.post + action.payload
    };
    return state;
}
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/increment'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/decrement'
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: 'post/incrementBy',
    payload: 10
});
console.log(reduxState); // let prevState=state;
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

//# sourceMappingURL=index.672d4772.js.map
