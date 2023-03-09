import React,{useState} from 'react'

export default function From1() {
  const initalvalues={Username:"",UserEmail:"",Mobile:'',Userpass:""}
  const [state,setState]=useState(initalvalues);
  const [formError,setError]=useState({})
  const Username=state.Username
  const UserEmail=state.UserEmail
  const Mobile=state.Mobile
  const Userpass=state.Userpass
  const handlechange=(e)=>{
// console.log(e.target);
const {name,value}=e.target
setState({...state,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    validate(state);
    
  }
  const validate=(state)=>{
    const errors={};
    if(!state.Username){
    // alert("please fill username")
       errors.Username="please fill username"
    }
    if (!state.Userpass){
      // alert("please fill userpass")
      errors.Userpass="please fill password"
    }
    if(!state.mobile){
      // alert("!please fill mobile no")
      errors.mobile="please fill mobile "
    }
    if(!state.UserEmail){
      // alert("please fill userEmail")
      errors.UserEmail="please fill Email"
    }
    setError(errors);
    

    
 }

   
  
  return (
    <div>
    <h3>Singup</h3>
      <form action='' onSubmit={handlesubmit}>
        <label htmlfor="Username">Name:-</label>
        <input type="text" name='Username' placeholder="Name" id='' value={Username} onChange={handlechange}></input>
        <span>{formError.Username}</span>
        <br></br>
        <label htmlfor='UserEmail'>Email:-</label>
        <input type="text" name='UserEmail' placeholder='Email' id='' value={UserEmail} onChange={handlechange}></input>
        <span>{formError.UserEmail}</span>
        <br></br>
         <label htmlfor='Mobile'>Mobile:-</label>
        <input type="text" name='Mobile' placeholder='mobile' id=''value={Mobile} onChange={handlechange}></input>
        <span>{formError.Mobile}</span>
        <br></br>

        <label htmlfor='Userpassword'>Password:-</label>
        <input type="text" name='Userpass' placeholder='password' id=''value={Userpass} onChange={handlechange}></input>
        <span>{formError.Userpass}</span>
        <br></br>
        <input type="submit" value="login"></input>
         
        

      </form>
    </div>
  )
}
