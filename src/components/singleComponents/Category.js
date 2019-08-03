import React from 'react'
import {withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class Category extends React.Component {
    render() {
        return (
            <li>
                <NavLink to={`/kategorija_vijesti/${this.props.id}`}> {this.props.name} </NavLink>
            </li>
        )
    }
}

export default withRouter(Category)