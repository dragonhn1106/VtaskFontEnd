import React from "react";
import MyLayout from "./layouts/MyLayout";
import "font-awesome/css/font-awesome.min.css";
import { connect } from "react-redux";
import { authCheckState } from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.onLogin();
  }
  render() {
    return (
      <div className="App">
        <MyLayout />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onLogin: () => dispatch(auth("ducpminh668@gmail.com", "12345678"))
    onLogin: () => dispatch(authCheckState())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
