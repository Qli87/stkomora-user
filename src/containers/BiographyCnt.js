import  { connect } from 'react-redux'
import Biography from '../components/Biography';
import { getBiography_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    memberDetails: state.memberReducer.memberDetails[0]
})

const mapDispatchToProps = dispatch => ({
    getBiography: () => dispatch(getBiography_request())
})

const BiographyCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Biography)

export default BiographyCnt