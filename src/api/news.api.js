import axios from 'axios'

export function getNews_api(){
    return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function getNoveltyDetails_api() {
    console.log(' in api: ')
    return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

export function getNewsForCategory_api() {
    return axios.get('http://www.mocky.io/v2/5d42d5eb3200005b00764370')
}

