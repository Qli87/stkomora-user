import React from 'react'

export default class Adv extends React.Component {
    render() {
        return (
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading" id="headingOne">
                        <h6 className="panel-title">
                            {/* <a data-toggle="collapse" data-parent="#accordion" href="#panel1" > */}
                            <a data-toggle="collapse" data-parent="#accordion" href={`#panel${this.props.id}`} >
                                {this.props.title}
                            </a>
                        </h6>
                    </div>
                    {/* <div id="panel1" className="panel-collapse collapse in"> */}
                    <div id={`panel${this.props.id}`} className="panel-collapse collapse in">
                        <div className="panel-body">
                            <p>
                                {this.props.full_text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}