import React from 'react'
import { withRouter } from 'react-router-dom'
import Member from './singleComponents/Member';
import PageHeader from './singleComponents/PageHeader';
import Select from 'react-select'
import Pagination from 'react-js-pagination'

class Members extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [],
            data: [],
            sort: {
                column : null,
                direction: 'desc'
            },
            activePage: 1,
            usersPerPage: 5,
            numbersOfPages: 5,
            totalMembers: 0
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        let pagMembers = []
        if(nextProps.members.length > 0) {
            pagMembers = nextProps.members.slice(this.state.activePage*this.state.usersPerPage - this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, [])
        }
        this.setState({
            members: nextProps.members,
            data: pagMembers,
            totalMembers: nextProps.members.length
        })
    }

    setup = () => {
        this.props.getMembers()
    }

    search = (input) => {
        let filteredMembers = this.props.members
        if(input.target.value.length > 0) {
            filteredMembers = filteredMembers.filter(item => {
                return item.name.toLowerCase().search(
                    input.target.value.toLowerCase()) !== -1
            })
        } else {
         filteredMembers = this.props.members.slice(this.state.activePage*this.state.usersPerPage - this.state.usersPerPage,
            this.state.activePage*this.state.usersPerPage, [])
        }
        this.setState({
            data: filteredMembers
        })
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const data = this.state.members.sort((a,b) => {
            if(column === 'name') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if(column === 'city') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if(column === 'company') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if(column === 'phone') {
                return b.id - a.id
            } else if (column === 'id') {
                return b.id - a.id
            }
        })


        if(direction === 'asc') {
            data.reverse()
        }
        this.setState({
            sort: {
                column: column,
                direction: direction
            },
            // data: data
            data: data.slice(this.state.activePage*this.state.usersPerPage - this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []),
            totalMembers: data.length
        })
    }

    setActivePage = (currentPage) => {
        let pagMembers = []
        pagMembers = this.props.members.slice(currentPage*this.state.usersPerPage - this.state.usersPerPage,
            currentPage*this.state.usersPerPage, [])
        this.setState({
            activePage: currentPage,
            data: pagMembers
        })
    }
    

    render() {
        const options = [
            {value: 10, label: '10'},
            {value: 20, label: '20'},
            {value: 50, label: '50'}
        ]
        return(
            <div>
                <PageHeader />
                <div className="container">
                        <div className="row ">
                            <div className="row membersPading">
                                <div className="col-sm-12">
                                    <div className="membersSelect">
                                        <Select options={options} placeholder="Broj redova" s/>
                                    </div>
                                    <div className="membersSearch">
                                        <label>
                                            Pretraga:
                                            <input type="text" className="form control searchField" onChange={this.search}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 box">
                                <table id="example" className="table table-hover">
                                    <thead >
                                        <tr>
                                            <th className="membersBorder" onClick={this.onSort('id')}>
                                                <span className="fa fa-sort"></span>
                                                ID
                                            </th>
                                            <th className="membersBorder" onClick={this.onSort('name')}>
                                                <span className="fa fa-sort"></span>
                                                Ime i prezime
                                            </th>
                                            <th className="membersBorder" onClick={this.onSort('phone')}>
                                                <span className="fa fa-sort"></span>
                                                Telefon
                                            </th>
                                            <th className="membersBorder" onClick={this.onSort('city')}>
                                                <span className="fa fa-sort"></span>
                                                Grad
                                            </th>
                                            <th className="membersBorder" onClick={this.onSort('company')}>
                                                <span className="fa fa-sort"></span>
                                                Ustanova
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.data.map(member => {
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
                                      
                            {/* PAGINATION */}

                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.usersPerPage}
                                totalItemsCount={this.state.totalMembers}
                                onChange={this.setActivePage}
                            />

                            {/* PAGINATION */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Members)