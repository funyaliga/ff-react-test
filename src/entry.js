import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>
const UsersAddPage = () => <div>Users add Page</div>
const HomeHd = () => <div>
    <Link to="/users">users</Link> - 
    <Link to="/users/add">users-add</Link>
</div>
const UsersHd = () => <div><Link to="/">home</Link></div>

class App extends React.Component {
    render() {
        return (
            <div className="primary-layout">
                <header>
                    Our React Router 4 App
                    <Route path="/" exact component={HomeHd} />
                    <Route path="/users" exact component={UsersHd} />
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/users/add" component={UsersAddPage} />
                        <Route path="/users" exact component={UsersPage} />
                    </Switch>
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('app')
)


