import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            xx: {
                a: {
                    t: 1,
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.xx.a , this.state.xx.a)
        console.log(nextProps.xx.a, this.props.xx.a)
        console.log(nextProps.xx, this.props.xx, nextProps.xx.a == this.props.xx.a, nextProps.xx.a == this.state.xx.a)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Test