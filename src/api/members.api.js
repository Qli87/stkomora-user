import axios from 'axios'

export function getMembers_api(){
    return axios.get('')
}

export function getBoardMembers_api() {
    return axios.get('http://www.mocky.io/v2/5d415a2b3100004d005392ba')
}

export function getBiography_api() {
    return axios.get('http://www.mocky.io/v2/5d402caa330000911c9d2a2e')
}

export function getMembersPg_api () {
    return axios.get('http://www.mocky.io/v2/5d4171603100004d005393cd')
    // return axios.get('http://www.mocky.io/v2/5d416df831000062005393a0')
}

export function getMembersNk_api () {
    return axios.get('http://www.mocky.io/v2/5d41741d3100007e005393ee')
}

export function getMembersCt_api () {
    return axios.get('http://www.mocky.io/v2/5d417f83310000570053944c')
}

export function getMembersSouth_api () {
    return axios.get('http://www.mocky.io/v2/5d417950310000530053941a')
}

export function getMembersNorth_api () {
    return axios.get('http://www.mocky.io/v2/5d417c333100007bc253942d')
}