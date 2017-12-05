import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'
import TT from './test';

class Index extends Component {

    componentWillReceiveProps(nextProps) {
        
    }

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

    onChange = (props) => {
        this.setState({
            xx: {
                a: {
                    t: 1,
                },
                b: 2
            }
        })
    }

    render() {
        return (
            <div>
                <TT xx={this.state.xx} />
                <a onClick={this.onChange}>改变</a>
            </div>
        )
    }
}

export default Index