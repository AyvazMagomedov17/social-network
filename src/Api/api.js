import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "3cf94e74-2ea8-4101-818a-5597a39df24e"
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
    },
    savePhotoApi(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instanse.put(`profile/photo`, formData)
            .then(response => response.data)
    },
    updateProfileInfoApi(profile) {
        return instanse.put('profile', profile)
            .then(response => response.data)
    }
}

export const authApi = {
    meAPI() {
        return instanse.get(`auth/me`)
            .then(response => response.data)
    },
    async loginAPI(email, password, rememberMe = false, captcha) {
        let response = await instanse.post(`auth/login`, { email, password, rememberMe, captcha })
        return response.data
    },
    logoutAPI() {
        return instanse.delete(`auth/login`)
            .then(response => response.data)
    },

}

export const securityApi = {
    async getCaptchaAPI() {
        let response = await instanse.get(`/security/get-captcha-url`)
        return response

    }
}