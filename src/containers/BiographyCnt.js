import  { connect } from 'react-redux'
import Biography from '../components/Biography';
import { getBiography_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    memberDetails: state.memberReducer.memberDetails
})

const mapDispatchToProps = dispatch => ({
    getBiography: (id) => dispatch(getBiography_request(id))
})

const BiographyCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Biography)

export default BiographyCnt