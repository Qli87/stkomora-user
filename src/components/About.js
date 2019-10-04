import React from 'react'
import { withRouter } from 'react-router-dom'
import BoardMember from './singleComponents/BoardMember';
import PageHeader from './singleComponents/PageHeader'
import ParliamentMember from './singleComponents/ParliamentMember';

class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            boardMembers: [],
            membersCt: [],
            membersPg: [],
            membersNk: [],
            membersSouth: [],
            membersNorth: [],
            aboutContent: '',
            aboutTitle: '',
            parliamentContent: ''
        }
    }

    componentDidMount() {
        this.setup()
    }

    setup = () => {
        this.props.getBoardMembers()
        this.props.getMembersCt()
        this.props.getMembersPg()
        this.props.getMembersNk()
        this.props.getMembersSouth()
        this.props.getMemberNorth()
        this.props.getContent()
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.content[0].aboutContent);
        let aboutContent = ''
        let aboutTitle = ''
        let parliamentContent= ''
        if(nextProps.content[0] !== undefined) {
            aboutContent = nextProps.content[0].aboutContent
            aboutTitle = nextProps.content[0].aboutTitle
            parliamentContent = nextProps.content[0].parliamentContent
        }
        this.setState({
            boardMembers: nextProps.boardMembers,
            membersCt: nextProps.membersCt,
            membersPg: nextProps.membersPg,
            membersNk: nextProps.membersNk,
            membersSouth: nextProps.membersSouth,
            membersNorth: nextProps.membersNorth,
            aboutContent: aboutContent,
            aboutTitle: aboutTitle,
            parliamentContent: parliamentContent
        })
    }

    render() {
        return(
            <div>
                <PageHeader />
                {/* team members start */}
                <div className="contain-wrapp padding-bot60">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="title-head">
                                    <h4>O nama </h4>
                                    { this.state.aboutTitle }
                                </div>
                                <p>
                                    { this.state.aboutContent }
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="team-wrapper">
                                    {
                                        this.state.boardMembers.map(member => {
                                            return <BoardMember 
                                                key= {member.id}
                                                id={member.id}
                                                name = {member.name}
                                                role= {member.role}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* team members end */}


                <div className="contain-wrapp gray-container padding-bot50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div id="wrap-progress" className="wrap-progress">
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="29">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Podgorica</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Danilovgrad</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="12">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Nikšić, Šavnik i Plužine</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Cetinje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Bar</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Budva</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Herceg Novi</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Kotor</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Tivat</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Ulcinj</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Bijelo Polje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Berane, Petnjica, Andrijevica</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Rožaje, Plav, Gusinje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Pljevlja i Žabljak</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Mojkovac, Kolašin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="title-head pull-right">
                                    <h3>Skupština komore</h3>
                                </div>
                                <p>
                                    {this.state.parliamentContent}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contain-wrapp padding-bot60">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-2 col-md-offset-1">
                                    <p>Podgorica</p>
                                    {
                                        this.state.membersPg.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                    }
                                </div>
                                <div className="col-md-2">
                                    <p>Nikšić</p>
                                    {
                                        this.state.membersNk.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                    }
                                </div>
                                <div className="col-md-2">
                                    <p>Juzna regija</p>
                                    {
                                        this.state.membersSouth.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                    }
                                </div>
                                <div className="col-md-2">
                                    <p>Cetinje</p>
                                    {
                                        this.state.membersCt.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                    }
                                </div>
                                <div className="col-md-2">
                                    <p>Sjeverna regija</p>
                                    {
                                        this.state.membersNorth.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(About)