import { connect } from 'react-redux'
import Contact from '../components/Contact'
import { getCompanyDetails_request } from '../actions/companyDetails.action'

const mapStateToProps = state => ({
    details: state.companyDetailsReducer.details
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getCompanyDetails_request())
})

const ContactCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Contact)

export default ContactCnt