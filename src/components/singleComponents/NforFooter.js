import React from 'react'
import {withRouter} from 'react-router-dom'


class NforFooter extends React.Component {
    render() {
        return(
            <li>
                <i className="fa fa-file-image-o post-data"></i>
                <h6><a href={`/detaljnije/${this.props.id}`}>{this.props.title}</a></h6>
            </li>
        )
    }
}

export default withRouter(NforFooter)
