import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';
import Category from './singleComponents/Category';
import Novelty from './singleComponents/Novelty';

class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            news: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            categories: nextProps.categories,
            news: nextProps.news
        })
    }

    setup = () => {
        this.props.getCategories()
        this.props.getNews()
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
                                            <div className="post">
                                                <a href="#1" className="post-thumbnail"><img src="img/news.jpg" className="img-thumb" alt="" /></a>
                                                <h6><a href="#1">Electram definitiones id duo, eu vidit voluptaria quo vel.</a></h6>
                                            </div>
                                            <div className="post">
                                            <a href="#1" className="post-thumbnail"><img src="img/news.jpg" className="img-thumb" alt="" /></a>
                                                <h6><a href="#1">Option phaedrum vel ea, at vix eruditi detraxit graeci.</a></h6>
                                            </div>
                                            <div className="post">
                                                <a href="#1" className="post-thumbnail"><img src="img/news.jpg" className="img-thumb" alt="" /></a>
                                                <h6><a href="#1">Fabellas moderatius cum in, pro labitur invenire in ullum.</a></h6>
                                            </div>
                                            <div className="post">
                                                <a href="#1" className="post-thumbnail"><img src="img/news.jpg" className="img-thumb" alt="" /></a>
                                                <h6><a href="#1">Senserit eloquentiam eu vel, et per probo noster eu labor.</a></h6>
                                            </div>
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
                                    this.state.news.map(item => {
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
                            </div>

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
        )
    }
}

export default withRouter(News)