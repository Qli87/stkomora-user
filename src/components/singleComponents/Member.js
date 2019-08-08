import React from 'react'

export default class Member extends React.Component {
    render() {
        return (
            <tr>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.id} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.name} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.phone} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.city} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.company} </td>
            </tr>
        )
    }
}