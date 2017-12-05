import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import reducer from './reducers'
const store = createStore(reducer)

import Todo from './views/Todo';


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
                    <Route path="/" exact component={HomeHd} />
                    <Route path="/users" exact component={UsersHd} />

                    <Link to="/todo">todo</Link>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/users/add" component={UsersAddPage} />
                        <Route path="/users" exact component={UsersPage} />
                        <Route path="/todo" exact component={Todo} />
                    </Switch>
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('app')
)


