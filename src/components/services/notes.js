import axios from 'axios'

// const baseurl = 'http://localhost:3001/api/notes'
const baseurl = '/api/notes'

const getall = () => {
    const request = axios.get(baseurl)


    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
      }

    return request.then(response => response.data.concat(nonExisting) )
}

const create = (newObject) => {
    const request = axios.post(baseurl, newObject)


    return request.then(response => response.data)

}


const update = (id, newObject) => {
    const request = axios.put(`${baseurl}/${id}`, newObject)
    return request.then(response => response.data)
}

const failedpromise = () => {
    return axios.get(`${baseurl}asd`).then((res) => res.data)
}


export default {
    getall, create, update, failedpromise
}
