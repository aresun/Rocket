function l(){
    console.log.apply(console,arguments);
}
/**
 * @param {any} argument 
 * @param {string} type 
 */
function typeWrong(argument,type){
    if(typeof type !== 'string'){
        throw new Error('error: need type string');
    }
    if(typeof argument !== type){
        l('error: need type '+type);
        return true;
    }
    return false;
}
/**
 * @param {any} argument 
 * @param {string} type 
 */
function typeWrongOrEmpty(argument,type){
    if(!argument || typeWrong(argument,type)){
        return true;
    }
    return false;
}