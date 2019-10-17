import  { connect } from 'react-redux'
import News from '../components/News'
import { getCategories_request } from '../actions/category.action';
import { getNews_request, getPopularNews_request } from '../actions/news.actions'

const mapStateToProps = state => ({
    categories: state.categoryReducer.categoties,
    news: state.newsReducer.news,
    popularNews: state.newsReducer.popularNews
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories_request()),
    getNews: () => dispatch(getNews_request()),
    getPopularNews: () => dispatch(getPopularNews_request())
})

const NewsCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(News)

export default NewsCnt