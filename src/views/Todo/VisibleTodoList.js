import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
@connect(
    ({todos, visibilityFilter}) => ({
        todos: getVisibleTodos(todos, visibilityFilter)
    }),
)
class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <li
                        key={todo.id}
                        onClick={() => this.props.dispatch(toggleTodo(todo.id))}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </li>
                )}
            </ul>
        )
    }
}

export default Index

// import React from 'react'
// import { connect } from 'react-redux'
// import { toggleTodo } from '../../actions'

// const TodoList = ({ todos, onTodoClick }) => (
//     <ul>
//         {todos.map(todo =>
//             <li
//                 key={todo.id}
//                 {...todo}
//                 onClick={() => onTodoClick(todo.id)}
//                 style={{
//                     textDecoration: todo.completed ? 'line-through' : 'none'
//                 }}
//             >
//                 {todo.text}
//             </li>
//         )}
//     </ul>
// )

// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETED':
//             return todos.filter(t => t.completed)
//         case 'SHOW_ACTIVE':
//             return todos.filter(t => !t.completed)
//         default:
//             throw new Error('Unknown filter: ' + filter)
//     }
// }

// const mapStateToProps = (state) => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps = {
//     onTodoClick: toggleTodo
// }

// const VisibleTodoList = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)

// export default VisibleTodoList