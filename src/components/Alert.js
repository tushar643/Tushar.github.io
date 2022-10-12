import React from 'react'

export default function Alert(props) {
const capitalize =(word)=>{
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}
  return (

      
    props.alert&& <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong> {capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>
  

  )
}


// comments ---->

// line no.6 --->
// yaha charAt matlab character ke 0th index mean 1 character ko uppercase kr do or 
// lowercase.slice(1) = ka matlab h ke 1st character ko chor k bake sab ko lowercase mai convert kr do  
