import axios from 'axios'

export const logout = () => localStorage.removeItem('token')
export const login = (user, password) => {
    return axios({
        method: 'POST',
        url: process.env.REACT_APP_BASEURL + '/token',
        data: {
            user, password
        }
    }).then(res => {

        alert(res.data)       

        console.log(res)
        //const token = res.data.result.token 

        localStorage.setItem('token', res.data)
        return res.data

    })
}
export const getInfo = () => {

    return axios({
        url: `${process.env.REACT_APP_BASEURL}/echo`,
        method: 'GET',
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }

    })


}


