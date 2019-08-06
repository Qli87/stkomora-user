import React from 'react'

export default class Member extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.id} </td>
                <td> {this.props.name} </td>
                <td> {this.props.phone} </td>
                <td> {this.props.city} </td>
                <td> {this.props.company} </td>
            </tr>
        )
    }
}