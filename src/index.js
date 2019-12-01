import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

class App extends Component {
    render(){
        return(
            <Header></Header>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))