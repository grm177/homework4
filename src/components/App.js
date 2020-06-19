import React, { Component } from 'react'
import Main from './Main'
import Profile from './Profile'
import Fortune from './Fortune'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

function NotFound() {
    return <div>404 Not Found</div>
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li>
                        <Link id="main-link" to="/main">
                            main
                        </Link>
                    </li>
                    <li>
                        <Link id="profile-link" to="/profile">
                            profile
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/main" component={Main} />
                    <Redirect exact from="/" to="/main" />
                    <Route path="/fortune/:name&:birthday" component={Fortune} />
                    <Route path="/profile" component={Profile} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default App
