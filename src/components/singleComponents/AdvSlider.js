import React from 'react'

export default class AdvSlider extends React.Component {
    render() {
        return (
            <div className="item">
                    <div className="testimoni-wrapp">
                        <div className="testimoni-contain">
                            <blockquote>
                                <p>
                                    {this.props.full_text}
                                </p>
                            </blockquote>
                        </div>
                        <div className="testimo-author">
                            <a href="#1"><img src="img/avatar01.png" className="testimo-avatar" alt=""/></a>
                            <span>{this.props.title}</span>
                            <a href='#ds'>{this.props.phone}</a>
                        </div>
                    </div>
                    
            </div>
        )
    }
}