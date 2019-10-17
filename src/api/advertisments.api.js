import axios from 'axios'

export function getAdvertisments_api() {
    return axios.get('http://api.zk.test/advertisments')
    // return axios.get('http://localhost/zk/article.json')
    // return axios.get('http://www.mocky.io/v2/5d453720300000e931c5c7fc')
}