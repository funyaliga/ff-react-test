import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

@connect()
class Index extends Component {
    constructor(props) {
        super(props)
    }

    input = null

    render() {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!this.input.value.trim()) {
                        return
                    }
                    this.props.dispatch(addTodo(this.input.value))
                    this.input.value = ''
                }}>
                    <input ref={node => { this.input = node }} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default Index