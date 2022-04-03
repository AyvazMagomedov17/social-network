import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "3eaa5983-335f-4414-b399-3fce95de6ecf"
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
    },
    getStatusAPI(userId) {
        return instanse.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatusApi(status) {
        return instanse.put(`profile/status`, { status: status })

            .then(response => response.data)
    }
}

export const authApi = {
    meAPI() {
        return instanse.get(`auth/me`)
            .then(response => response.data)
    },
    loginAPI(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data)
    },
    logoutAPI() {
        return instanse.delete(`auth/login`)
            .then(response => response.data)
    },

}