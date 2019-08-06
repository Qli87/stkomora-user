import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { getCompanyDetails_request } from '../actions/companyDetails.action';

const mapStateToProps = state => ({
    details: state.companyDetailsReducer.details
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getCompanyDetails_request())
})

const FooterCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterCnt