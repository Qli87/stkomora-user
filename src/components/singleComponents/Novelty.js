import React from 'react'
import { withRouter } from 'react-router-dom'

class Novelty extends React.Component {

    detailsPage = (id) => {
        let path = '/detaljnije/'+id
        this.props.history.push(path)
    }

    render() {
        return(
            <article className="row post">
                <div className="col-md-12">
                    <h5> {this.props.title} </h5>
                    <ul className="post-meta">
                        <li><i className="fa fa-calendar"></i> {this.props.date}</li>
                        <li><i className="fa fa-user"></i> {this.props.posted_by}</li>
                        <li><i className="fa fa-file-text"></i> {this.props.category_name}</li>
                        <li><i className="fa fa-comments"></i> 0</li>
                    </ul>
                    <p>
                        {
                          this.props.detailsPage? this.props.full_text :  this.props.content
                        }
                    </p>
                    {
                        this.props.detailsPage ? "" : <p><button onClick = { () => this.detailsPage(this.props.id)} className="btn btn-primary">Detaljnije</button></p>
                    }
                </div>
        </article>
        )
    }
}

export default withRouter(Novelty)