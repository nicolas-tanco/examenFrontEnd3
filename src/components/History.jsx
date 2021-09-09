import React from "react";

class History extends React.Component{
   
    render(){
        
        return(
            <div className="recordatorio">
                <h3>Seleccion anterior: {this.props.bitacora[this.props.bitacora.length-1]} </h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>                  
                    {
                     this.props.bitacora.slice(0,this.props.bitacora.length-1).map((e,i)=><li key={i}>{e}</li>)
                    }
                </ul>
            </div>
        )
    }
}


export default History