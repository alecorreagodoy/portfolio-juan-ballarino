import React, { Component  } from 'react';
import Img1 from '../img/Img1.png';
import MAT_4860 from '../img/MAT_4860.jpg';
import MAT_4863 from '../img/MAT_4863.jpg';
import Carousel from 'react-bootstrap/Carousel'




class Image extends Component{

  


  render() {
    
  

    return(
      <div className="Gallery">
      <div id ="Gallery"> 
      <Carousel>
  <Carousel.Item>
  <section className="one-fourth" id="html"> 
   
   <a Target = "_blank" 
   Title="galeria" 
   href="https://www.flickr.com/photos/184868185@N06/">  <img
   className="d-block w-100"
   src={Img1}
   alt="Third slide"
   id="firstimg" 
   width="100%" 
   height="90%"
 />  </a>
   </section>
    <Carousel.Caption>
      <h3>Juan Ballarino Arquitecto</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
      <section className="one-fourth" id="html"> 
        <a Target = "_blank" Title="galeria" href="https://www.flickr.com/photos/184868185@N06/"> </a>
        </section>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <section className="one-fourth" id="html"> 
   
   <a Target = "_blank" 
   Title="galeria" 
   href="https://www.flickr.com/photos/184868185@N06/">  <img
   className="d-block w-100"
   src={MAT_4860}
   alt="Third slide"
   id="firstimg" 
   width="100%" 
   height="90%"
 /></a>
   </section>

    <Carousel.Caption>
      
      <p>"Las tendencias desaparecen, el estilo es eterno.” Yves Saint Laurent.
      <section className="one-fourth" id="html"> 
      <a Target = "_blank" Title="galeria" href="https://www.flickr.com/photos/184868185@N06/albums"> </a>        </section>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <section className="one-fourth" id="html"> 
   
    <a Target = "_blank" 
    Title="galeria" 
    href="https://www.flickr.com/photos/184868185@N06/albums">  <img
    className="d-block w-100"
    src={MAT_4863}
    alt="Third slide"
    id="firstimg" 
    width="100%" 
    height="90%"
  /></a>
    </section>

    <Carousel.Caption>
      <h3>Juan Ballarino Designs</h3>
      <p>
     
     
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

        </div>
        
        <div className="Button" >
 <a Target="_blank" Titulo="Galeria" href="https://www.flickr.com/photos/184868185@N06/albums"><button claccName="btn ">Gallery</button></a>
 
</div>
        <div className=" col-md-12 ficha ">
        <p className="text-ficha">
          <spam>STARBUCKS </spam>de relleno en documentos electrónicos, 
          quedando esencialmente igual 
          al original. Fue popularizado en los 60s con la.
          de relleno en documentos electrónicos, 
          quedando esencialmente igual 
          al original. Fue popularizado en los 60s con la
        </p>
        </div>

      </div>
   
    )
  }
}

export default Image;









 