import axios from 'axios'

export function getCompanyDetails_api() {
    return axios.get('http://api.zk.test/footer');
    // return axios.get('http://www.mocky.io/v2/5d47d634330000ed3ea3eb48')
}