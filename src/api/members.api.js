import axios from 'axios'

export function getMembers_api(){
    return axios.get('http://api.zk.test/member')
    // return axios.get('http://www.mocky.io/v2/5d480fbd3300009287a3eceb')
}

export function getBoardMembers_api() {
    return axios.get('http://api.zk.test/boardMember')
    // return axios.get('http://www.mocky.io/v2/5d415a2b3100004d005392ba')
}

export function getBiography_api(id) {
    return axios.get('http://api.zk.test/biography/'+id);
    // return axios.get('http://www.mocky.io/v2/5d402caa330000911c9d2a2e')
}

export function getMembersPg_api () {
    return axios.get('http://api.zk.test/parliamentPg')
    // return axios.get('http://www.mocky.io/v2/5d4171603100004d005393cd')
}

export function getMembersNk_api () {
    return axios.get('http://api.zk.test/parliamentNk')
    // return axios.get('http://www.mocky.io/v2/5d41741d3100007e005393ee')
}

export function getMembersCt_api () {
    return axios.get('http://api.zk.test/parliamentCt')
    // return axios.get('http://www.mocky.io/v2/5d417f83310000570053944c')
}

export function getMembersSouth_api () {
    return axios.get('http://api.zk.test/parliamentSouth')
    // return axios.get('http://www.mocky.io/v2/5d417950310000530053941a')
}

export function getMembersNorth_api () {
    return axios.get('http://api.zk.test/parliamentNorth')
    // return axios.get('http://www.mocky.io/v2/5d417c333100007bc253942d')
}

