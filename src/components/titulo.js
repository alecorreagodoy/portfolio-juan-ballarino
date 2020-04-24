import React,{ Component} from 'react';
import Navbarr from './navbar';
import { Link, animateScroll as scroll } from "react-scroll";

import Links from './links'




class Titulo extends Component{
    render(){
     
        return(
            <div className="">
                <div className="row">
                    <div className="col-sm-12 text-centre">
                  <div className="titulo-page">
               
                      <h1>JUAN BALLARINO</h1>
                      
                        
                        <div className="col-sm sub-title">
                          <p>ARCHITECT</p>
                        </div>
                        <hr color="black"/>
                          <Navbarr links={Links}/>

                        <hr color="black"/>
                        </div>
                    
                     
                    
                    
                  </div>
                </div>


            </div>
        );
    }

}
export default Titulo;

