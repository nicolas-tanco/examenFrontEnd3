import React from "react";
import data from "./data/data.json";
import MainText from "./components/MainText";
import Option from "./components/Option";
import History from "./components/History";

class App extends React.Component {
  state = {
    historias: data,
    bitacora: [],
    counter: 1,
    currentId: "1",
  };

  shouldComponentUpdate() {
    if (this.state.counter >= 5) return false;
    else return true;
  }

  handleCounter = (option) => {
    let newCounter = this.state.counter + 1;
    let newBitacora = this.state.bitacora.concat(option);
    let newCurrentId = newCounter + option.toLowerCase();
    this.setState({
      counter: newCounter,
      bitacora: newBitacora,
      currentId: newCurrentId,
    });
    if (newCounter > 5) alert("Fin.");
  };

  render() {
    return (
      <div className="App">
        <div className="layout">
          <MainText
            aMostrar={
              this.state.historias.find((e) => e.id === this.state.currentId)
                .historia
            }
          />
          <Option
            counter={this.handleCounter}
            opciones={
              this.state.historias.find((e) => e.id === this.state.currentId)
                .opciones
            }
          />
          <History bitacora={this.state.bitacora} />
        </div>
      </div>
    );
  }
}

export default App;
