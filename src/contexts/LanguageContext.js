import React from "react";

const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  
  //business logic  
  state = { language: "english" };

  //business logic 
  onLanguageChange = language => {
    this.setState({ language });
  };

  //share current data along with the ability to change it with other components inside our application
  render() {
    return (
      // value is a NEW object with our state and onLanguageChange callback function
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}> 

        {/* children is whatever nested jsx / components that our LanguageStore will wrap */}
        {this.props.children}


      </Context.Provider>
    );
  }

}

export default Context;


//