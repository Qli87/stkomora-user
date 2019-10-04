import React from 'react'
import { withRouter } from 'react-router-dom'


class BoardMember extends React.Component {


    biographyPath(id) {
        const path = '/biografija/'+id
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="team-row">
                <span className="team-frame"></span>
                <div className="team-detail">
                    <h6>{this.props.name}</h6>
                    <span>{this.props.role}</span>
                    <ul className="team-network">
                        {/* <li><a href="#2"><i className="fa fa-graduation-cap icon-square  fa-primary"></i></a></li> */}
                        <li><button className="btnBiography" onClick={() => this.biographyPath(this.props.id)}><i className="fa fa-graduation-cap icon-square fa-primary"></i></button></li>
                    </ul>
                </div>
                <div className="team-column">
                    <img src="img/team1.jpg" className="img-responsive" alt="" />
                </div>
            </div>
        )
    }
}

export default withRouter(BoardMember)