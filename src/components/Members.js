import React from 'react'
import { withRouter } from 'react-router-dom'
import Member from './singleComponents/Member';
import PageHeader from './singleComponents/PageHeader';

class Members extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            members: nextProps.members
        })
    }

    setup = () => {
        this.props.getMembers()
    }

    render() {
        console.log(this.state);
        
        return(
            
            <div >
                <PageHeader />

                <div className="row">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="text-primary" style={{'textAlign':'center'}}>
                                            <tr>
                                                <th>ID</th>
                                                <th>Ime i prezime</th>
                                                <th>Telefon</th>
                                                <th>Grad</th>
                                                <th>Ustanova</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.members.map(member => {
                                                    return <Member 
                                                            key={member.id}
                                                            id={member.id}
                                                            name={member.name}
                                                            phone={member.phone}
                                                            city={member.city}
                                                            company={member.company}
                                                        />
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Members)