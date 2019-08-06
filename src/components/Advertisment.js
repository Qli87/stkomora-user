import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';
import AdvSlider from './singleComponents/AdvSlider';
import Adv from './singleComponents/Adv';

class Advertisment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            advs: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            advs: nextProps.advertisments
        })
    }

    setup = () => {
        this.props.getAdvertisments()
    }

    render() {
        console.log(this.state);
        return(
            <div className="contain-wrapp padding-bot50">
                <PageHeader />
                <div className="container">
                    <div className="row pageAdvPadding">
                        <h5>Oglasi:</h5>

                        <div className="col-md-12 col-sm-12">
                            <div id="testimoni" className="owl-carousel botControls-right">
                                <div className="item">
                                    {
                                    this.state.advs.map(adv => {
                                        return <AdvSlider 
                                            key={adv.id}
                                            id={adv.id}
                                            full_text={adv.full_text}
                                            title={adv.title}
                                            phone={adv.phone}
                                        />
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            {
                                    this.state.advs.map(adv => {
                                        return <Adv 
                                            key={adv.id}
                                            id={adv.id}
                                            full_text={adv.full_text}
                                            title={adv.title}
                                            phone={adv.phone}
                                        />
                                    })
                                }
                        </div> */}
                    </div>

                            <nav>
                                <ul className="pagination navPadding">
                                    {/* <li className="disabled"><a href="#1" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li> */}
                                    <li className="active"><a href="#1">1</a></li>
                                    <li><a href="#1">2</a></li>
                                    <li><a href="#2">3</a></li>
                                    <li><a href="#3">4</a></li>
                                    <li><a href="#4">5</a></li>
                                    {/* <li><a href="#5" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li> */}
                                </ul>
                            </nav>  

                </div>
            </div>
        )
    }
}

export default withRouter(Advertisment)