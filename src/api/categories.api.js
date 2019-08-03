import axios from 'axios'

export function getCategories_api() {
    return axios.get('http://www.mocky.io/v2/5d42920a3200006a007640c2')
}