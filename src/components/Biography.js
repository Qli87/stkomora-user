import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';

class Biography extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userDetails: []
        }
    }

    componentDidMount() {
        this.props.getBiography(parseInt(this.props.biographyParams.id))
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            userDetails: nextProps.memberDetails
        })
    }

  
    render() {
        return(
            <div>
                <PageHeader />

                <div className="contain-wrapp gray-container paddingbot-clear">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-sm-offset-3">
                                <div className="title-head">
                                    <h3>{this.state.userDetails.name}</h3>
                                    <p>{this.state.userDetails.role}</p>
                                </div>
                                <p>
                                    {this.state.userDetails.biography}
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img src="img/team1.jpg" className="img-responsive" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Biography)