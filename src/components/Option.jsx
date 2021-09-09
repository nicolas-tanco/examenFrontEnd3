import React from "react";

class Option extends React.Component{


    handleClick=(event)=>{
        this.props.counter(event.target.innerText)
    }

    

    render(){
        return(
            <div className="opciones">
               <div className="opcion"><button onClick={this.handleClick} className="botones">A</button><h2>{this.props.opciones.a}</h2></div>
               <div className="opcion"><button onClick={this.handleClick} className="botones">B</button><h2>{this.props.opciones.b}</h2></div>
            </div>
        )
    }
}

export default Option