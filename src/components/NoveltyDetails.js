import React from 'react'
import { withRouter } from 'react-router-dom'
import Novelty from './singleComponents/Novelty';
import PageHeader from './singleComponents/PageHeader';

class NoveltyDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        this.props.getDetails(parseInt(this.props.novelty.id));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            details: nextProps.details
        })
    }

    render() {
        return(
            <div>
                <PageHeader />
                <div className="col-md-6 col-sm-6 col-sm-offset-3 pageDetailsPadding">
                {
                    // this.state.details.map(item => {
                    //     return <Novelty 
                    //             key={item.id}
                    //             id={item.id}
                    //             title={item.title}
                    //             date={item.date}
                    //             posted_by={item.posted_by}
                    //             category_name={item.category_name}
                    //             full_text={item.full_text}
                    //             detailsPage={true}
                    //         />
                    // })
                    <Novelty 
                        key={this.state.details.id}
                        id={this.state.details.id}
                        title={this.state.details.title}
                        date={this.state.details.date}
                        posted_by={this.state.details.posted_by}
                        category_name={this.state.details.category_name}
                        full_text={this.state.details.full_text}
                        detailsPage={true}
                    />
                }
                </div>
            </div>
        )
    }
}

export default withRouter(NoveltyDetails)