import React from 'react'
 const Contact = (props) =>{
     return(
         <div>
             <h2>Contact</h2>
             <p>
                lorem20 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ex mollitia recusandae non sed adipisci quis obcaecati quod neque iusto, odio, suscipit explicabo officia soluta perspiciatis quaerat labore iure numqua.
             </p>
             <button class="btn wave-effect wave-light" type="button" onClick={()=>{props.history.push('/')}}>Go To Home</button>
             <button class="btn wave-effect wave-light" type="button" onClick={()=>props.history.push('/about')}>Go to Contact</button>
             </div>
     )
 }

 export default Contact 