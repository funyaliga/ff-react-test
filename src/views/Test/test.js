import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Test extends Component {
    static propTypes = {
        
    }

    static defaultProps = {
        
    }

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}

export default Test