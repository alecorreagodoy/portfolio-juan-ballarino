import React, { Component }from 'react';
import MiVideoCover from './video';
import './Works.css';
import Card from 'react-bootstrap/card'





class Works extends Component{
    constructor(props){
        super(props);

        this.state ={
            images: this.props.images
        };
    }


   render(){
   
    return(
    
    
        <div className="Work container">
            <div className="">

              <div className="works ">
                  <div className="work-title">
                      <h2>Works</h2>
                  </div>
                  <div className="myVideo">

                    <MiVideoCover className="video" />

                  </div>
                  
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Birka LLC</Card.Title>
                    <Card.Title className="cargo">Estimates Coordinator</Card.Title>
                    <Card.Text>
                    - Noviembre 2018 – : Arquitecto - Estimates Coordinator –
                    Coordinador de cómputos y presupuestos.
                    Responsable del proceso licitatorio, análisis de gastos generales, beneficio, gastos financieros, impositivos y de importación. Relación con proveedores; búsqueda de materiales nuevos homologando la calidad solicitada con las diferentes marcas. 
                    Estimación de duración de obra y calendario de instalaciones.
                    Relación directa con las marcas: CUPFSA: Chanel. LVMH: Dior, Givenchy, Guerlain, Kenzo, Loewe. Puig: Carolina Herrera, Paco Rabanne, Nina Ricci, Valentino, Agatha Ruiz de la Prada. Estée Lauder: Mac, Estée Lauder, Clinique, Tom Ford, Ermenegildo Zegna, La Mer, Jo Malone.
                    L’Oréal: Lancôme, Yves Saint Laurent, Giorgio Armani. Essence Corp: Versace, Burberry. L’Occitane en Provence. P&G: Dolce & Gabanna, Lacoste, Hugo Boss, Escada, Gucci. Nespresso, Bvlgari, Tiffany & co.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Body>
                    <Card.Title>Starbucks Coffee Argentina</Card.Title>
                    <Card.Title className="cargo">Construction Manager</Card.Title>
                    <Card.Text>
                     - Enero 2016 – Agosto 2018:
                    Enero 2018 – Agosto 2018: Arquitecto - Construction Manager - Analista Sr. de Construcción
                    Director de obra. Coordinación de las diferentes áreas involucradas en los procesos de apertura y remodelaciones de tiendas. Contratación de empresas constructoras y proveedores externos, negociando con éstos para que los costos no superen el presupuesto estipulado para dichas tareas. 
                    Control de la documentación de obra y la planilla de costos verificando que sean aptas para licitación. Gestión de los procesos licitatorios. Proyección y control del cronograma de obra en virtud de garantizar el cumplimiento de plazos.
                    Armado del presupuesto inicial, seguimiento financiero del mismo durante el transcurso de la obra para evitar desvíos económicos. Relevamiento de cada sitio con los diversos asesores, evaluando la factibilidad del proyecto propuesto. Revisión técnica del sitio para prevenir futuros 
                    imponderables en el transcurso o finalizada la obra evitando costos, excediendo el presupuesto.
                    Compra de insumos de obra y seguimiento del proceso de logística y recepción en obra.

                    </Card.Text>
                    <Card.Title className="cargo">Project Manager</Card.Title>
                    <Card.Text>
                    Enero 2016 – Diciembre 2017: Arquitecto - Project Manager - Analista Sr. de Proyectos. Responsable del análisis de cada uno de los locales que se proponen para la realización de tiendas haciendo el seguimiento de todo el proceso de diseño.Desarrollo de layouts verificando la factibilidad de la locación propuesta.
                    Líder del proceso de diseño de tiendas: Interlocutor directo con el Starbucks Corporation Store Design Team, manteniendo una call semanal para comunicar nuevos sites, seguimiento del proceso, corrección de las diversas etapas del proceso (layout – renders – materiales – terminaciones) y control y seguimiento de fechas de entrega de dichas etapas.
                    Responsable de verificar que en todas las obras se respete el diseño propuesto por la Corporación. Control de la documentación de obra y la planilla de costos. Contratación y seguimiento de asesores. Gestión de procesos licitatorios. Relevamiento técnico anual de todas las tiendas que cumplen 5 años o más para verificar el estado de las mismas, detectar la necesidad de una remodelación y definir la escala de la misma, pudiendo ser: menor, mayor o estructural. Seguimiento del Site Tracking Report semanal, donde se reporta a la Corporación las fechas de nuevas tiendas, tales como la fecha en que se entrega la tienda al área de Operaciones, inicio y finalización de obra y fecha de apertura, entre otras.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <br></br>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>GU Arquitectura</Card.Title>
                    <Card.Title className="cargo">Arquitecto - Director de obra</Card.Title>
                    <Card.Text>
                    - Febrero 2015 – Octubre 2015: Arquitecto - Director de obra. Responsable del desarrollo de proyectos y Dirección de obra de los mismos. Proyecto ejecutivo completo. Realización de planos de obra. Cómputo y presupuesto. Coordinación de gremios.
                    Obras:
                    Puesta en valor de la fachada del Hospital Zubizarreta - Puesta en valor de la Plaza Misericordia - Puesta en valor de la plaza Saint Exupéry - Puesta en valor del pasaje Hugo del Carril - Remodelación de la Sede Comunal nro. 3 - Oficinas para agencia de viajes - Local comercial gastronómico “Figonet”.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Havanna S.A</Card.Title>
                    <Card.Title className="cargo">Arquitecto proyectista</Card.Title>
                    <Card.Text>
                    - Marzo 2010 – Diciembre 2013: Arquitecto proyectista.
                    Responsable del desarrollo de locales, stands y góndolas de la marca y dirección de obra en los mismos. (Franquicias y propios de la marca, nacionales e internacionales).
                    Dirección de obra, organización, coordinación de gremios y relación con proveedores. Líder del Programa "Proceso de Apertura": Realización del cronograma de obra, coordinando las distintas áreas involucradas en los procesos de apertura y remodelación de locales. Confección de propuestas y Layouts en 2D. Modelado de Layouts en 3D (imágenes y videos) calidad VRay. Diseño de nuevos exhibidores y mobiliario. Desarrollo del nuevo manual de identidad y marca. Confección de presupuestos.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Freelances Works</Card.Title>
                    <Card.Title className="cargo">Arquitecto</Card.Title>
                    <Card.Text>
                    Enero de 2012 – Mayo de 2012: Arquitecto.
                    Proyecto: Reestructuración y remodelación de una vivienda de 2 unidades.
                    Documentación de obra y proyecto. El proyecto contaba con la remodelación de una vivienda de 2 unidades antigua diseñada para transformarse en un edificio que contendrá unidades de 1, 2, 3 ambientes y lofts.
                    </Card.Text>
                    <Card.Text>
                    Septiembre de 2011 – Octubre de 2011: Renderer para el estudio de Arquitectos Terreni - Harvey.
                    Proyecto: Concesionaria de automóviles.
                    Planta Baja libre con un front desk y patio en el sector trasero del terreno. Entrepiso previsto para oficina privada y living de recepción. Confección de renders para la presentación del proyecto a los inversores e inmobiliaria.
                    </Card.Text>
                    <Card.Text>
                    A.C. S.R.L. - Enero 2010 – Marzo 2010: Supervisor de calidad de la Empresa Constructora para obra civil en la Refinería de Shell C.A.P.S.A.
                    Responsable de coordinación y tiempos de la obra, calidad, compra de materiales y trabajos administrativos varios.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Miller Zell S.R.L.</Card.Title>
                    <Card.Title className="cargo">Proyectista</Card.Title>
                    <Card.Text>
                    - Diciembre 2006 – Marzo 2007: Proyectista.
                    Obras comerciales y de Retail, tales como Samsonite, Samsonite Black Label, ESSO, Viamo, entre otros. Confección de propuestas y Layouts en 2D. Relación directa con cliente.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Universidad de Belgrano</Card.Title>
                    <Card.Title className="cargo">Ayudante de Cátedra</Card.Title>
                    <Card.Text>
                    - 2006 – 2008: , en la cátedra Lauría y Lettieri de Forma y Comunicación.
                   </Card.Text>
                    </Card.Body>
                </Card>            
                
            </div>
            </div>
        </div>
      
     
    )}
    
}



export default Works;