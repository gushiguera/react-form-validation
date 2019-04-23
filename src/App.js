import React from 'react';
import './App.css';
import Form from "./components/Form"
import Message from "./components/Message"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isFormValid: false
    }
  }

  setFormValidation = (isFormValid) => {
    this.setState({
      isFormValid
    })
  }

  render() {
    return (
      <div className="grid-container">
        <Form isFormValid={this.setFormValidation}/>
        <Message isFormValid={this.state.isFormValid} />
      </div>
    )
  }
}

export default App;

