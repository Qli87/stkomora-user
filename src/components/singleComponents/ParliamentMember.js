import React from 'react'

export default class ParliamentMember extends React.Component {
    render() {
        return(
            <p>
                {this.props.name} 
                {/* {this.props.company}  {this.props.phone} */}
            </p>
        )
    }
}