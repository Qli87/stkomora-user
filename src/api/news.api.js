import axios from 'axios'

export function getNews_api(){
    return axios.get('http://api.zk.test/news')
    // return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function getNoveltyDetails_api(id) {
    return axios.get('http://api.zk.test/news/'+id)
    // return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function getNewsForCategory_api(action) {
    return axios.get('http://api.zk.test/newsForCategory/'+action)
    // return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function getNewsForFooter_api() {
    return axios.get('http://api.zk.test/newsForFooter')
}

