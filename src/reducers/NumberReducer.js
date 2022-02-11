export default (state=null, action)=>{
    if (action.type === 'GENERATE_NUMBER'){
        return action.payload;
    }
    return state; 
}
