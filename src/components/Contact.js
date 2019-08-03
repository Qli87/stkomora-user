import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';

class Contact extends React.Component {
    render(){
        return(
            <div>
                <PageHeader />
                <div className="contain-wrapp padding-bot70">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="title-head">
                                    <h4>Pišite nam</h4>
                                </div>
                            </div>
                        </div>
				<div className="row">
					<div className="col-md-8 col-sm-7">
						<form method="post" id="mycontactform">
							<div className="clearfix"></div>
							<div id="success"></div>
							<div className="row wrap-form">
								<div className="form-group col-md-6 col-sm-6">
									<h6>Ime i prezime</h6>
									<input type="text" name="name" id="name" className="form-control input-lg required" placeholder="Unesite ime i prezime..."></input>
									<span data-for="name" className="error"></span>
								</div>
								<div className="form-group col-md-6 col-sm-6">
									<h6>Email</h6>
									<input type="email" name="email" id="email" className="form-control input-lg required" placeholder="Unesite Vašu email adresu..."></input>
									<span data-for="email" className="error"></span>
								</div>
								<div className="form-group col-md-12">
									<h6>Vaša poruka</h6>
									<textarea name="message" id="message" className="form-control input-lg required" placeholder="Poruka..." rows="9"></textarea>
									<span data-for="message" className="error"></span>
								</div>
								<div className="form-group col-md-12">
									<input type="submit" value="Pošalji poruku" id="submit" className="btn btn-primary btn-lg"></input>
									<div className="status-progress"></div>
								</div>
							</div>
						</form>
					</div>
					
					<div className="col-md-4 col-sm-5">
						<div className="contact-detail">
							<div className="contact-sparator"></div>
							<ul className="list-unstyled">
								<li>
									<i className="fa fa-home fa-2x fa-primary"></i>
									<h6>Adresa</h6>
									<p>
									Jovana Tomaševića 13/1<br />
									Podgorica
									</p>
								</li>
								<li>
									<i className="fa fa-phone fa-2x fa-primary"></i>
									<h6>Kontakt telefoni</h6>
									<p>
										+382 020/220-833<br />
										+382 020/220-894
									</p>
								</li>
								<li>
									<i className="fa fa-envelope fa-2x fa-primary"></i>
									<h6>Email</h6>
									<p>
									info@stomkomcg.me
									</p>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
			<div className="map-wrapper">
				<div id="map" className="maps"></div>
				<div className="item-map" 
					data-lat="-6.921167" 
					data-lng="107.610467" 
					data-address="Jl. Asia Afrika, Kota Bandung, Jawa Barat, Indonesia">
				</div>
			</div>
		</div>

        )
    }
}


export default withRouter(Contact)
