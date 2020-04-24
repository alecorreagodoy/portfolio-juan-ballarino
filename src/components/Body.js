import React, { Component } from 'react';
import Image from './image';





const FancyBorder = ({ color, children }) => (
  <div className={"FancyBorder FancyBorder-" + color}>
    {children}
  </div>
);

class Body extends Component {
    render(){
      
      return (
        <FancyBorder color="black">
        <div id="Home" className="Body container">
        
         
          
           
             <div>
                 
                   <div className="container" >
                       <div className="" >
                            <div className="col-12 col-md-12 title-img">
                                
                                    <Image/>
                            </div>
                         
                       </div>
                   </div>
                         
                
                
             </div>
          
       
         
        </div>
       
        </FancyBorder>
      );
    }
  
  }
  
  export default Body;