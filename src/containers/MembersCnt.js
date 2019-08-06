import { connect } from 'react-redux'
import Members from '../components/Members';
import { getMembers_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getMembers: () => dispatch(getMembers_request())
})

const MembersCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Members)

export default MembersCnt