import React from 'react'
 const About = (props) =>{
     return(
         <div>
             <h2>About</h2>
             <p>
                lorem40 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ex mollitia recusandae non sed adipisci quis obcaecati quod neque iusto, odio, suscipit explicabo officia soluta perspiciatis quaerat labore iure numqua.</p>
             <button class="btn wave-effect wave-light" type="button" onClick={()=>{props.history.push('/')}}>Go To Home</button>
             <button type="button" class="btn wave-effect wave-light"  onClick={()=>props.history.push('/contact')}>Go to Contact</button>
             </div>
     )
 }

 export default About