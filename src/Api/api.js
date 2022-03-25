import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "5b99983c-761e-4c99-9af2-b8f56830af83"
    }

})
export const usersApi = {
    getUsersAPI(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    FollowAPI(userId) {
        return instanse.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollowAPI(userId) {
        return instanse.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}


export const profileApi = {
    getProfileAPI(userId) {
        return instanse.get(`profile/${userId}`)
            .then(response => response.data)
    }
}