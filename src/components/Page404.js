import React from 'react'
import { withRouter } from 'react-router-dom'

class Page404 extends React.Component {
    render() {
        return (
            <div className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="circle-content">
                                <div className="circle-intro"><p>4<span>0</span>4</p></div>
                                <h4>Sorry...this page can't be found</h4>
                                <p>If you want return to the homepage, please <a href="pocetna">Click here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Page404)