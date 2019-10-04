import  { connect } from 'react-redux'
import NewsForCategory from '../components/NewsForCategory';
import { getNewsForCategory_request } from '../actions/news.actions';
import { getCategories_request } from '../actions/category.action';

const mapStateToProps = state => ({
    news: state.newsReducer.news,
    categories: state.categoryReducer.categoties
})

const mapDispatchToProps = dispatch => ({
    getNews: (id) => dispatch(getNewsForCategory_request(id)),
    getCategories: () => dispatch(getCategories_request())
})

const NewsForCategoryCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(NewsForCategory)

export default NewsForCategoryCnt