import React from "react";

class MainText extends React.Component{

    render(){

        return (<div className="historia">
                <h1>{this.props.aMostrar}</h1>
                </div>
        )
    }
}

export default MainText