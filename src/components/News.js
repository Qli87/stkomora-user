import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';
import Category from './singleComponents/Category';
import Novelty from './singleComponents/Novelty';
import PopularNews from './singleComponents/PopularNews';
import Pagination from 'react-js-pagination'


class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            news: [],
            activePage: 1,
            newsPerPage: 5,
            numberOfPagButton: 5,
            totalAdvs: 0,
            data: [],
            popularNews: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        let pagNews = []
        if(nextProps.news.length > 0) {
            pagNews = nextProps.news.slice(this.state.activePage*this.state.newsPerPage - this.state.newsPerPage,
                this.state.activePage*this.state.newsPerPage, [])
        }
        this.setState({
            popularNews: nextProps.popularNews,
            categories: nextProps.categories,
            news: nextProps.news,
            data: pagNews,
            totalAdvs: nextProps.news.length
        })
    }

    setActivePage = (currentPage) => {
        this.setState({
            activePage: currentPage,
            data: this.state.news.slice(currentPage*this.state.newsPerPage - this.state.newsPerPage,
                currentPage*this.state.newsPerPage, [])
        })
    }

    setup = () => {
        this.props.getCategories()
        this.props.getNews()
        this.props.getPopularNews()
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
                                    <div className="widget">
                                        <h5 className="widget-head">Popularni članci</h5>
                                        <div className="recent-widget">
                                            {
                                                this.state.popularNews.map(news => {
                                                    return <PopularNews
                                                        key={news.id}
                                                        id={news.id}
                                                        title={news.title}
                                                     />
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h5 className="widget-head">Pratite nas</h5>
                                        <a href="#1" className="btn btn-facebook btn-icon btn-block">Facebook <i className="fa fa-facebook"></i></a>
                                        <a href="#2" className="btn btn-twitter btn-icon btn-block">Twitter <i className="fa fa-twitter"></i></a>
                                        <a href="#6" className="btn btn-instagram btn-icon btn-block">Instagram <i className="fa fa-instagram"></i></a>
                                    </div>
                                </aside>
                            </div>

                            <div className="col-md-9 col-sm-9">
                                {
                                    this.state.data.map(item => {
                                        return <Novelty 
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            date={item.date}
                                            posted_by={item.posted_by}
                                            category_name={item.category_name}
                                            content={item.content}
                                        />
                                    })
                                }
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.newsPerPage}
                                    totalItemsCount={this.state.totalAdvs}
                                    pageRangeDisplayed={this.state.numberOfPagButton}
                                    onChange={this.setActivePage}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(News)