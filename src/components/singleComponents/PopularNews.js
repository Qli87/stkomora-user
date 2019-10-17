import React from 'react'

export default class PopularNews extends React.Component {
    
    render() {
        return (
            <div className="post">
                <a href="#1" className="post-thumbnail"><img src="img/news04.png" className="testimo-avatar" alt="" /></a>
                <h6><a href={`/detaljnije/${this.props.id}`}>{this.props.title}</a></h6>
            </div>
        )
    }
}