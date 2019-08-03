import  { connect } from 'react-redux'
import NoveltyDetails from '../components/NoveltyDetails'
import { getNoveltyDetails_request } from '../actions/news.actions';

const mapStateToProps = state => ({
    details: state.newsReducer.noveltyDetails
})

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(getNoveltyDetails_request(id))
})

const NoveltyDetailsCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(NoveltyDetails)

export default NoveltyDetailsCnt