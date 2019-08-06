import React from 'react'

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            details: nextProps.details[0]
        })
    }

    setup = () => {
        this.props.getDetails();
    }

    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="widget">
                                    <h5>Društvene mreže</h5>
                                    <img src="logo.png" className="marginbot15" alt="" />
                                    <p>
                                        Sve aktuelnosti vezane za komoru možete pratiti na našim nalozima na društvenim mrežama.
                                    </p>
                                    <a href="#1"><i className="fa fa-facebook fa-2x icon-square"></i></a>
                                    <a href="#2"><i className="fa fa-twitter fa-2x icon-square"></i></a>
                                    <a href="#3"><i className="fa fa-google-plus fa-2x icon-square"></i></a>
                                    <a href="#4"><i className="fa fa-instagram fa-2x icon-square"></i></a>
                                    <a href="#5"><i className="fa fa-linkedin fa-2x icon-square"></i></a>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="widget">
                                    <h5>Linkovi</h5>
                                    <ul className="list-icons link-list">
                                        <li><i className="fa fa-angle-double-right"></i> <a href="pocetna">Početna</a></li>
                                        <li><i className="fa fa-angle-double-right"></i> <a href="onama">O nama</a></li>
                                        <li><i className="fa fa-angle-double-right"></i> <a href="vijesti">Vijesti</a></li>
                                        <li><i className="fa fa-angle-double-right"></i> <a href="#4">Članovi komore</a></li>
                                        <li><i className="fa fa-angle-double-right"></i> <a href="#5">Oglasi</a></li>
                                        <li><i className="fa fa-angle-double-right"></i> <a href="#6">Kontakt</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="widget">
                                    <h5>Vijesti</h5>
                                    <ul className="recent-post">
                                        <li>
                                            <i className="fa fa-file-image-o post-data"></i>
                                            <h6><a href="#3123">Kongres1</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-video-o post-data"></i>
                                            <h6><a href="#3213">Kongres2</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-text-o post-data"></i>
                                            <h6><a href="#213">Kongres3</a></h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
            				<div className="col-md-3 col-sm-3">
                                <div className="widget">
                                    <h5>Kontakt</h5>
                                    <div className="tweet">
                                        <p>Adresa: {this.state.details.address || ""} , {this.state.details.city || ""}</p>
                                        <p>Tel1: {this.state.details.phone1 || ""} </p>
                                        <p>Tel2: {this.state.details.phone2 || ""} </p>
                                        <p>E-mail: {this.state.details.email || ""}</p>
                                        <p>Radno vrijeme: {this.state.details.work_time || ""} </p>
                                        <p>Br.žiro računa: { this.state.details.bank_account || ""} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subfooter">
                        <p>2019 &copy; Copyright All rights Reserved.</p>
                    </div>
                </footer>
            </div>
        )
    }
}