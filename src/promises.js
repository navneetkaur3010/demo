let p=new Promise((resolve,reject)=>{

    let x="Hello"
    let y="Hello"

    if(x===y){
        resolve()
    }else{
        reject()
    }
})

p.then((res)=>{
    console.log("Sucessfull")
}, ()=>{
   console.log("Failed")
}).catch(()=>{
    console.log("unexpectde error")
})