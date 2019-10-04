import axios from 'axios'

export function getDetails_api() {
    return axios.get('http://api.zk.test/homePage')
}