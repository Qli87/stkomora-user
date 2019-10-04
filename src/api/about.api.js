import axios from 'axios'

export function about_api() {
    return axios.get('http://api.zk.test/about')
    // return axios.get('http://www.mocky.io/v2/5d6cb56e3000005f008fb7e0')
}

