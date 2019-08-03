import  { connect } from 'react-redux'
import About from '../components/About';
import { getBoardMembers_request, getMembersCt_request, getMembersPg_request, getMembersNk_request, getMembersSouth_request, getMembersNorth_request } from '../actions/member.actions';

const mapStateToProps = state => ({
    boardMembers: state.memberReducer.boardMembers,
    membersCt: state.memberReducer.membersCt,
    membersPg: state.memberReducer.membersPg,
    membersNk: state.memberReducer.membersNk,
    membersSouth: state.memberReducer.membersSouth,
    membersNorth: state.memberReducer.membersNorth
})

const mapDispatchToProps = dispatch => ({
    getBoardMembers: () => dispatch(getBoardMembers_request()),
    getMembersCt: () => dispatch(getMembersCt_request()),
    getMembersPg: () => dispatch(getMembersPg_request()),
    getMembersNk: () => dispatch(getMembersNk_request()),
    getMembersSouth: () => dispatch(getMembersSouth_request()),
    getMemberNorth: () => dispatch(getMembersNorth_request())
})

const AboutCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(About)

export default AboutCnt