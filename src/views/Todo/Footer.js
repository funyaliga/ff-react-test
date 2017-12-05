import React, { Component } from 'react'
import FilterLink from './FilterLink'

class Index extends Component {
    render() {
        return (
            <p>
                Show:
                {
                    [
                        <FilterLink key="SHOW_ALL" filter="SHOW_ALL">All</FilterLink>,
                        <FilterLink key="SHOW_ACTIVE" filter="SHOW_ACTIVE">Active</FilterLink>,
                        <FilterLink key="SHOW_COMPLETED" filter="SHOW_COMPLETED">Completed</FilterLink>,
                    ].reduce((prev, curr) => [prev, ', ', curr])}
                }
            </p>
        )
    }
}

export default Index

// import React from 'react'
// import FilterLink from './FilterLink'

// const Footer = () => (
//     <p>
//         Show:
//         {" "}
//         <FilterLink filter="SHOW_ALL">
//             All
//         </FilterLink>
//         {", "}
//         <FilterLink filter="SHOW_ACTIVE">
//             Active
//         </FilterLink>
//         {", "}
//         <FilterLink filter="SHOW_COMPLETED">
//             Completed
//         </FilterLink>
//     </p>
// )

// export default Footer