import React from "react";
import { render } from "react-dom";
class ControlledComp extends React.Component{

constructor(){
    super()
    this.state={
        name:"",
        lname:"",
        mobile:"",
        display:"",
        cstate:"",
        gender:"",
        ageover18:false,
        Language:{
            English:"false",
            Hindi:"false"
        }
    
    }
}


onchangefun=(e)=>{

    this.setState({name:e.target.value})
}

onchangerun=(a)=>{
    this.setState({lname:a.target.value})
}

onchangemob=(c)=>{
    this.setState({mobile:c.target.value})

}

onchangest=(b)=>{
    this.setState({cstate:b.target.value})
}

onchangecheck=(d)=>{
    this.setState({ageover18:d.target.checked})
}

onchangegender=(f)=>{
    this.setState({gender:f.target.value})
}

oncheckLang=(g)=>{
    this.setState({Language:g.target.checked})
}




handleClick=()=>{
     alert("Submited")
    this.setState({display:"FullName: "+ this.state.name+" "+ this.state.lname +"  ,  "+ "Mobile: " + this.state.mobile +
                    "  ,  "+"State:" + " "+this.state.cstate +   " , "+ "Age above 18: " + this.state.ageover18 + "  ,  " + 
                   "Gender: " +  this.state.gender + "  ,  " + this.state.Language} )
    
}


render(){
    const {ageover18}=this.state;
 
    
    return <div>
        <h1>Registration Form</h1>

        <hr></hr>

        Fisrt Name <input type="text" onChange={this.onchangefun} value={this.state.name}/>
        

        <br></br><br></br>

        Last Name  <input type="text" onChange={this.onchangerun} value={this.state.lname}/>
        

        <br></br><br></br>

        Mobile Number <input type="tel" maxLength={10} onChange={this.onchangemob} value={this.state.mobile}/>
        

        <br></br><br></br>

        Gender:  Male<input type="radio" name="gender" value="male" onChange={this.onchangegender}/>  
                 Female<input type="radio" name="gender" value="female" onChange={this.onchangegender}/>
                 
                 


        <br></br><br></br>

        Current State:
        <select value={this.state.cstate} onChange={this.onchangest}>
        <option selected value="Choose">select......</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Punjab">Punjab</option>
        <option value="Kerela">Kerela</option>
        <option value="Karnataka">Karnataka</option>
      </select>


        <br></br><br></br>
        
        Language: English&nbsp;&nbsp; <input type="checkbox" name="English" onchange={this.oncheckLang}/>
                  Hindi&nbsp;&nbsp; <input type="checkbox" name="Hindi" onchange={this.oncheckLang}/>
                  

        <br></br><br></br>

      
        Age over 18 years: {ageover18? "Yes":"No"}  <input type="checkbox" checked={ageover18} onChange={this.onchangecheck}/>  
                


        <br></br><br></br>



        <button onClick={this.handleClick}>Submit</button>
        <br/><hr/><br/>
        {this.state.display}



    </div>
}
}

export default ControlledComp




























// import React from 'react'



// class ControlledComp extends React.Component{

//     constructor()

//     {

//         super()

//         this.state={

//             name:""

//         }

//     }

//     onChangefun=(e)=>

//     {

//         //console.log("Onchange()",e.target.value)

//         this.setState({name:e.target.value})

//     }

//     render()

//     {

//         return <div>

//             <input type="text" onChange={this.onChangefun} value={this.state.name}/>

//             {this.state.name}

//         </div>

//     }

// }

