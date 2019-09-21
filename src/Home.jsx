import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { login, getInfo, logout } from './API/Index'

class App extends React.Component {
    state = {
        auth: false,
        result: null
    }
    componentDidMount() {
        this.setState({ auth: !!localStorage.getItem('token') })
    }
    logout = () => {
        logout()
        this.setState({ auth: false })
        this.props.history.push('/')   
    }
    login = () => {
        login("admin", "123456").then(x => {

            this.setState({ auth: true })
        })
    }
    info = () => {

        getInfo()
            .then(result => this.setState({ result: JSON.stringify(result) }))
            .catch(error => this.setState({ result: JSON.stringify(error) }))
    }
    render() {
        return (
            <div class="ui container">
                <div class="ui secondary  menu">
                    <a class="active item">
                        Home
  </a>
                    <a class="item">
                        Messages
  </a>
                    <a class="item">
                        Friends
  </a>
                    <div class="right menu">
                        <div class="item">
                            <div class="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i class="search link icon"></i>
                            </div>
                        </div>
                        {!this.state.auth ?
                            <button class="ui item" onClick={this.login}>
                                login
    </button> :
                            <button class="ui item" onClick={this.logout}>
                                logout
   </button>
                        }
                        <button class="ui item" onClick={this.info}>
                            search
    </button>
                    </div>
                </div>

                {this.state.auth && <p>login as <b>admin</b></p>}
                <p>
                    res:
                 <br />
                    <JSONPretty id="json-pretty" data={this.state.result}></JSONPretty>
                </p>

            </div>
        );
    }
}

export default App;
