import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { getDetails_request } from '../actions/homePage.action'

const mapStateToProps = state => ({
    details: state.homePageReducer.details
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getDetails_request())
})

const HomePageCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

export default HomePageCnt