import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { getCompanyDetails_request } from '../actions/companyDetails.action';
import { getNewsForFooter_request } from '../actions/news.actions';

const mapStateToProps = state => ({
    details: state.companyDetailsReducer.details,
    news: state.newsReducer.news
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getCompanyDetails_request()),
    getNews: () => dispatch(getNewsForFooter_request())
})

const FooterCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterCnt