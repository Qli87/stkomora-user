import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';

class Contact extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			details: []
		}
	}

	componentDidMount(){
		this.setup()
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			details: nextProps.details[0]
		})
	}

	setup = () => {
		this.props.getDetails()
	}

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
									{ this.state.details.address }<br />
									{ this.state.details.city }
									</p>
								</li>
								<li>
									<i className="fa fa-phone fa-2x fa-primary"></i>
									<h6>Kontakt telefoni</h6>
									<p>
										{ this.state.details.phone1} <br />
										{ this.state.details.phone2}
									</p>
								</li>
								<li>
									<i className="fa fa-envelope fa-2x fa-primary"></i>
									<h6>Email</h6>
									<p>
									{ this.state.details.email }
									</p>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
			<div className="map-wrapper">
				<div className="item-map" >
					<iframe title="title" width="100%" height="500" src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;coord=42.4424238,19.2552018&amp;q=Stomatolo%C5%A1ka%20komora%20Crne%20Gore+(Stomatoloska%20Komora)&amp;ie=UTF8&amp;t=k&amp;z=19&amp;iwloc=B&amp;output=embed" 
					style={{'frameBorder': '0', 'scrolling': 'no', 'marginHeight': '0', 'marginWidth':'0'}}></iframe>
				</div>
			</div>
		</div>

        )
    }
}


export default withRouter(Contact)
