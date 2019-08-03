import React from 'react'
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component {
    render(){
        return(
            <div>
                

                {/* slider starts */}
                <div id="slider-wrapper">
                    <div id="layerslider" style={{'width':'100%','height':'660px'}}>
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
                                        <i className="fa fa-info fa-2x icon-square fa-default"></i>
                                        <h5>Cilj komore?</h5>
                                        <p>
                                        Osnovni cilj Stomatološke komore je afirmacija stomatologije u svim segmentima, uz poštovanje etičkog kodeksa, kontinuiranu edukaciju i poboljšanje kvaliteta oralnog zdravlja crnogorske populacije.
                                        </p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left">
                                            <i className="fa fa-book fa-2x icon-square fa-primary"></i>
                                            <h5>Licenca?</h5>
                                            <p>
                                            Licenca za rad je dokument koji doktoru stomatologije izdaje Stomatološka komora Crne Gore i uslov je za obavljanje samostalne djelatnosti. Licenca za rad se izdaje na period od sedam godina i može se obnoviti.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-icon absolute-left">
                                            <i className="fa fa-home fa-2x icon-square fa-default"></i>
                                            <h5>O komori</h5>
                                            <p>
                                            Osnivačka skupština je održana 16. decembra 2016. godine i to je datum koji predstavlja istorijski trenutak u crnogorskoj stomatologiji, a dana 25. aprila 2017. godine dobili smo i zvaničan status pravnog lica upisom u CRPS.
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
                                    <p>Članstvo u Komori je obavezno za sve doktore stomatologije koji neposredno pružaju zdravstvenu zaštitu na teritoriji Crne Gore.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/img02.jpg" className="img-responsive" alt="" />
                                    <div className="caption">
                                        <i className="fa fa-briefcase fa-3x icon-circle fa-default"></i>
                                        <h5>Članovi komore</h5>
                                        <p>
                                        Članovi Komore su zdravstveni radnici koji su završili stomatološki fakultet i koji neposredno obavljaju zdravstvenu djelatnost iz oblasti stomatologije.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/img03.jpg" className="img-responsive" alt="" />
                                    <div className="caption">
                                        <i className="fa fa-headphones fa-3x icon-circle fa-primary"></i>
                                        <h5>Član komore</h5>
                                        <p>
                                        Redovan član Komore postaje se upisom u Registar doktora stomatologije i uplatom članarine, nakon čega dobija člansku kartu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="thumbnail">
                                    <img src="img/img03.jpg" className="img-responsive" alt="" />
                                    <div className="caption">
                                        <i className="fa fa-flask fa-3x icon-circle fa-default"></i>
                                        <h5>Počastni članovi</h5>
                                        <p>
                                        Počasni članovi se mogu birati iz redova članstva Komore ili drugih institucija iz inostranstva, za posebni dopirinos u radu Komore.
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
                                <a className="btn btn-default btn-icon btn-block" href="#213">Preuzmi <i className="fa fa-send"></i></a>
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