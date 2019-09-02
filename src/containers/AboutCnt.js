import  { connect } from 'react-redux'
import About from '../components/About';
import { getBoardMembers_request, getMembersCt_request, getMembersPg_request, getMembersNk_request, getMembersSouth_request, getMembersNorth_request } from '../actions/member.actions';
import { getAboutContent_request } from '../actions/aboute.action';

const mapStateToProps = state => ({
    boardMembers: state.memberReducer.boardMembers,
    membersCt: state.memberReducer.membersCt,
    membersPg: state.memberReducer.membersPg,
    membersNk: state.memberReducer.membersNk,
    membersSouth: state.memberReducer.membersSouth,
    membersNorth: state.memberReducer.membersNorth,
    content: state.aboutReducer.content
})

const mapDispatchToProps = dispatch => ({
    getBoardMembers: () => dispatch(getBoardMembers_request()),
    getMembersCt: () => dispatch(getMembersCt_request()),
    getMembersPg: () => dispatch(getMembersPg_request()),
    getMembersNk: () => dispatch(getMembersNk_request()),
    getMembersSouth: () => dispatch(getMembersSouth_request()),
    getMemberNorth: () => dispatch(getMembersNorth_request()),
    getContent: () => dispatch(getAboutContent_request())
})

const AboutCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(About)

export default AboutCnt