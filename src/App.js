import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Fetch } from "./Fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fetch
          url="https://ghibliapi.herokuapp.com/people"
          disableInitialFetch
          name="people"
        >
          {({ data, loading, error, action }) => {
            if (loading) {
              return "loading";
            }

            if (error) {
              return "error";
            }

            if (data) {
              return data.map(item => (
                <div>
                  <h5>name: {item.name}</h5>
                </div>
              ));
            }

            console.log(action);

            return <button onClick={() => action.fetch()}>Fetch</button>;
          }}
        </Fetch>
      </div>
    );
  }
}

export default App;
