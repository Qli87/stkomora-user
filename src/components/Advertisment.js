import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';
import AdvSlider from './singleComponents/AdvSlider';
import Pagination from 'react-js-pagination'

// import Adv from './singleComponents/Adv';

class Advertisment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            advs: [],
            activePage: 1,
            newsPerPage: 5,
            numberOfPagButton: 5,
            totalAdvs: 0,
            data: [],
            advertisments: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps){
        let pagAdvs = []
        if(nextProps.advertisments.length > 0) {
            pagAdvs = nextProps.advertisments.slice(this.state.activePage*this.state.newsPerPage - this.state.newsPerPage,
                this.state.activePage*this.state.newsPerPage, [])
        }
        this.setState({
            advertisments: nextProps.advertisments,
            data: pagAdvs,
            totalAdvs: nextProps.advertisments.length
        })
    }

    setActivePage = (currentPage) => {
        this.setState({
            activePage: currentPage,
            data: this.state.advertisments.slice(currentPage*this.state.newsPerPage - this.state.newsPerPage,
                currentPage*this.state.newsPerPage, [])
        })
    }

    setup = () => {
        this.props.getAdvertisments()
    }

    render() {
        return(
            <div>
                <PageHeader />
                <div className="container">
                    <div className="row pageAdvPadding">
                        <h5>Oglasi:</h5>
                        <div className="col-md-12 col-sm-12">
                            <div id="testimoni" className="botControls-right">
                                <div className="item">
                                    {
                                        this.state.data.map(adv => {
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
                    </div>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.newsPerPage}
                            totalItemsCount={this.state.totalAdvs}
                            pageRangeDisplayed={this.state.numberOfPagButton}
                            onChange={this.setActivePage}
                        />
                </div>
            </div>
        )
    }
}

export default withRouter(Advertisment)