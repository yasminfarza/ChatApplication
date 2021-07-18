import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './containers/chat';
import WebSocketInstance from './websocket';

import './assets/style.css';

class App extends React.Component{

    componentDidMount(){
        WebSocketInstance.connect();
    }

    render(){
        return (
            <Chat/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));