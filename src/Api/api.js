import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "354306e5-e505-4a7f-a2f6-17639c84d98e"
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
    getLoginAPI() {
        return instanse.get(`auth/me`)
            .then(response => response.data)
    }
}