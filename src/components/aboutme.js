import React, { Component } from 'react';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }

class Aboutme extends Component{
   

    render(){
        return(
          
          <div id ="Aboutme"className="Section 1">
            <Dialog title="Who am I"
                message="Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis ullamcorper placerat morbi mollis orci, platea dictumst maecenas fames imperdiet porta congue habitant montes consequat eros. Nec tellus mauris leo pellentesque purus inceptos ultricies massa pulvinar tristique, imperdiet habitasse cursus rutrum hendrerit tincidunt semper auctor class. Eleifend nam sapien himenaeos parturient class erat phasellus libero, nisl non pharetra at ligula dictum curae magna feugiat, natoque tortor fames eu per mollis scelerisque.

Vehicula ultricies morbi litora lobortis integer nullam habitasse habitant pellentesque sollicitudin, accumsan vestibulum turpis in venenatis dictumst iaculis magna. Duis dictum diam eros facilisi commodo purus nunc curabitur, vestibulum imperdiet placerat ornare gravida parturient ut posuere, nostra tellus semper lobortis quis phasellus risus. Eleifend quam scelerisque aliquet platea mattis dui morbi lectus nec, pretium ultrices etiam luctus massa odio nisi tristique velit, blandit rutrum libero nascetur volutpat nunc convallis suspendisse">

            </Dialog>
            </div>
            
        );
    }
}

export default Aboutme;