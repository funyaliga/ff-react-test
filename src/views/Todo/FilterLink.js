import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions'

@connect(
    ({visibilityFilter}, ownProps) => ({
        active: visibilityFilter === ownProps.filter
    }),
)
class Index extends Component {
    onClick = (e) => {
        e.preventDefault()
        this.props.dispatch(setVisibilityFilter(this.props.filter))
    }
    render() {
        return this.props.active
            ? (<span>{this.props.children}</span>)
            : (
                <a href="#"
                    onClick={this.onClick}
                >
                    {this.props.children}
                </a>
            )
    }
}
export default Index

// import React from 'react'
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../../actions'
// const Link = ({ active, children, onClick }) => {
//     if (active) {
//         return <span>{children}</span>
//     }

//     return (
//         <a href="#"
//             onClick={e => {
//                 e.preventDefault()
//                 onClick()
//             }}
//         >
//             {children}
//         </a>
//     )
// }

// const mapStateToProps = (state, ownProps) => {
//     console.log('in')
//     console.log(ownProps)
//     return {
//         active: ownProps.filter === state.visibilityFilter
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onClick: () => {
//         dispatch(setVisibilityFilter(ownProps.filter))
//     }
// })

// const FilterLink = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Link)

// export default FilterLink