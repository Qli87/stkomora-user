import React from 'react'
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: ''
        }
    }   

    componentDidMount() {
        this.props.getDetails()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            details: nextProps.details
        })
    }

    render(){
        return(
            <div>
                {/* slider starts */}
                <div id="slider-wrapper">
                    <div id="layerslider" style={{'width':'100%','height':'660px', 'backgroundImage':'url(../img/home-final.jpg)'}}>
                        <div className="ls-slide" data-ls="slidedelay:8000;transition2d:1,2,3,4;">
                            <img src="img/slide-bg04.jpg" className="ls-bg" alt="Slide background" />
                            <img src="img/imac.png" className="ls-l"
                                style={{'top':'240px','left':'50%'}}
                                data-ls="offsetxin:0;
                                offsetyin:top;
                                durationin:1000;
                                delayin:500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:top;
                                offsetxout:0;
                                durationout:1000;" alt="" />
                            <img src="img/macbook.png" className="ls-l"
                                style={{'top':'345px','left':'34%'}}
                                data-ls="offsetxin:left;
                                offsetyin:0;
                                durationin:1000;
                                delayin:1500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:0;
                                offsetxout:left;
                                durationout:1000;" alt="" />
                            <img src="img/ipad.png" className="ls-l"
                                style={{'top':'340px','left':'62%'}}
                                data-ls="offsetxin:right;
                                offsetyin:0;
                                durationin:1000;
                                delayin:2500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:0;
                                offsetxout:right;
                                durationout:1000;" alt="" />
                            <img src="img/iphone.png" className="ls-l"
                                style={{'top':'410px','left':'67%'}}
                                data-ls="offsetxin:right;
                                offsetyin:0;
                                durationin:1000;
                                delayin:3500;
                                easingin:easeOutBack;
                                easingout:easeOutQuart;
                                offsetyout:0;
                                offsetxout:right;
                                durationout:1000;" alt="" />
                            <h2 className="ls-l headline3"
                                style={{'top':'110px','left':'50%'}}
                                data-ls="offsetxin:0;
                                durationin:2500;
                                delayin:4500;
                                easingin:easeOutElastic;
                                rotatexin:90;
                                transformoriginin:50% top 0;
                                offsetxout:0;
                                durationout:1000;
                                rotatexout:90;
                                transformoriginout:50% bottom 0;">
                                Inspired is multipurpose template
                                </h2>
                        </div>
                    </div>
                </div>
                {/* slider ends */}

                <div className="intro-wrapp paddingtop-clear">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="intro-icon-line">
                                    <li>
                                        <div className="col-icon absolute-left">
                                        <i className="fa fa-info fa-2x icon-square fa-default gradientIconStyle"></i>
                                        <h5 className="hpParagraph">Cilj komore?</h5>
                                        <p className="hpParagraph">
                                        {this.state.details.goal}
                                        </p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left">
                                            <i className="fa fa-book fa-2x icon-square fa-default gradientIconStyle"></i>
                                            <h5 className="hpParagraph">Licenca?</h5>
                                            <p className="hpParagraph">
                                            {this.state.details.licence}
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left">
                                            <i className="fa fa-home fa-2x icon-square fa-default gradientIconStyle"></i>
                                            <h5 className="hpParagraph">O komori</h5>
                                            <p className="hpParagraph">
                                            {this.state.details.about}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* content starts */}
                <div className="contain-wrapp padding-bot50">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="title-head centered">
                                    {/* <h4>Članstvo u komori</h4> */}
                                    <p>
                                        {this.state.details.titleh1}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/img001.jpg" className="img-responsive" alt="" />
                                    <div className="caption">
                                        <i className="fa fa-briefcase fa-3x icon-circle fa-default"></i>
                                        <h5>Članovi komore</h5>
                                        <p>
                                            {this.state.details.titleMembers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/img002.jpg" className="img-responsive" alt="" />
                                    <div className="caption">
                                        <i className="fa fa-headphones fa-3x icon-circle fa-default"></i>
                                        <h5>Član komore</h5>
                                        <p>
                                            {this.state.details.titleMember}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/img003.png" className="img-responsive" alt="" />
                                    <div className="caption">
                                        <i className="fa fa-flask fa-3x icon-circle fa-default"></i>
                                        <h5>Počastni članovi</h5>
                                        <p>
                                            {this.state.details.titleMemberH}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content ends */}

                <div className="clearfix"></div>

                {/*start member of... */}
                <div className="cta-wrapp cta-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h4>Preuzmite formular za pristupanje komori?</h4>
                            </div>
                            <div className="col-md-3">
                                <a className="btn btn-default btn-icon btn-block downloadDoc" href="#213">Preuzmi <i className="fa fa-send"></i></a>
                            </div>
                        </div>
                    </div>
                </div>                
                {/* end member of */}

            </div>
        )
    }
}

export default withRouter(HomePage)