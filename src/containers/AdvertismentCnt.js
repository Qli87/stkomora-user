import  { connect } from 'react-redux'
import Advertisment from '../components/Advertisment';
import { getAdvertisments_request } from '../actions/advertisment.action';

const mapStateToProps = state => ({
    advertisments: state.advertismentReducer.advertisments
})

const mapDispatchToProps = dispatch => ({
    getAdvertisments: () => dispatch(getAdvertisments_request())
})

const AdvertismentCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Advertisment)

export default AdvertismentCnt