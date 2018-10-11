import React from 'react';
import ReactDOM from 'react-dom';
import {NewsboardApp} from "./components/NewsboardApp"
class App extends React.Component {
    render() {
        return(
            <div>
               <NewsboardApp />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));