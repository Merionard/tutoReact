import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <Connect/>

        </div>

    );
}

export default App;


function Welcome() {
    return <h1>welcome!</h1>;
}

function AskConnect() {
    return <h1>please connect</h1>;
}

function MsgWelcome(props) {
    if (props.isLogIn) {
        return <Welcome/>
    }
    return <AskConnect/>;

}

class Connect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLogIn: false}
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logIn() {
        this.setState({isLogIn: true});
    }

    logOut() {
        this.setState({isLogIn: false});
    }

    render() {
        let button;
        if(this.state.isLogIn){
            button=<button onClick={this.logOut}>deconnexion</button>;
        }else{
            button = <button onClick={this.logIn}>connexion</button>
        }
        return (
            <div>
                <MsgWelcome isLogIn={this.state.isLogIn}/>
                {button}
            </div>
        )
    }
}