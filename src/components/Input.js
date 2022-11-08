const Input =(props)=>{
    return(
         <textarea  rows="20" cols="100" onChange={(e)=>{props.setDatafn(e.target.value)}} className="input">

        </textarea>
    )
}
export default Input;