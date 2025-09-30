/* const value = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const val = 'Alex';
        if(val){
            resolve(val);
        }
        else{
            reject(new Error('No data'));
        }
    },1000)
})

function getUser(inputName){
     return  new Promise((resolve, reject) => {
    setTimeout(() => {
        let userDetails = [{name:'Alex', age:30}];
        let user = userDetails.find((user) => user.name === inputName);
        if (user) {
            resolve(userDetails);
        }else{
            reject("data empty");
        }
    }, 1000);
})
}

value.then((name)=>{
    return getUser(name);
})
.then((userDetails)=>{
    console.log(userDetails);
    
})
.catch((error)=>{
    console.error(error);      
})
.finally(()=>{    
})


async function process() {
    try {
    const name = await value;
    const userDetails = await getUser(name);
    console.log(userDetails);
    console.log('Test');
        
        
    } catch (error) {
        console.log(error.message);
    }
    finally{
        console.log('Last final');
        
    }
}
process()

console.log('last');
 */






