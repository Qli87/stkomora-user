import  React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/singleComponents/PageHeader'
import Novelty from './singleComponents/Novelty';
import Category from './singleComponents/Category';

class NewsForCategory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            categories: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            news: nextProps.news,
            categories: nextProps.categories
        })
    }

    setup = () => {
        this.props.getNews()
        this.props.getCategories()
    }

    render() {
        return (
            <div>
                <PageHeader />

                <div className="contain-wrapp padding-bot50">	
		            <div className="container">
			            <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <aside>
                                    <div className="widget">
                                        <h5 className="widget-head">Kategorije</h5>
                                        <ul className="cat">
                                            {
                                                this.state.categories.map(category => {
                                                    return <Category 
                                                        key={category.id}
                                                        id={category.id}
                                                        name={category.name}                                                    
                                                        />
                                                })
                                            }
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-9 col-sm-9">
                            {
                                this.state.news.map(item => {
                                    return <Novelty 
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                date={item.date}
                                                posted_by={item.posted_by}
                                                category_name={item.category_name}
                                                content={item.content}
                                                full_text={item.full_text}
                                                details_page={false}
                                            />
                                })
                            }
                            
                                <nav>
                                    <ul className="pagination">
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
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(NewsForCategory)