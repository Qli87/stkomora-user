import axios from 'axios'

export function getNews_api(){
    return axios.get('http://api.zk.test/news')
}

export function getNoveltyDetails_api(id) {
    return axios.get('http://api.zk.test/news/'+id)
}

export function getNewsForCategory_api(action) {
    return axios.get('http://api.zk.test/newsForCategory/'+action)
}

export function getNewsForFooter_api() {
    return axios.get('http://api.zk.test/newsForFooter')
}

export function getPopularNews_api() {
    return axios.get('http://api.zk.test/popularNews')
}
