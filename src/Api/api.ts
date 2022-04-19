
import { ProfileType, ResultCodeEnum, ProfilePhotosType, UsersDataType, ResultCodeForCaptchaEnum } from './../Types/types';
import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "3cf94e74-2ea8-4101-818a-5597a39df24e"
    }

})

type getUsersAPIType = {
    error: null | string
    totalCount: number
    items: Array<UsersDataType>


}
export const usersApi = {
    async getUsersAPI(currentPage: number, pageSize: number) {
        const response = await instanse.get<getUsersAPIType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async FollowAPI(userId: number) {
        const response = await instanse.post<updateStatusApiType>(`follow/${userId}`);
        return response.data;
    },
    async unFollowAPI(userId: number) {
        const response = await instanse.delete<updateStatusApiType>(`follow/${userId}`);
        return response.data;
    }
}

type getProfileAPIType = ProfileType
type getStatusAPIType = string
type updateStatusApiType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
    fieldsErrors: Array<string>
}
type savePhotoApiType = {
    data: {
        photos: ProfilePhotosType
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
    fieldsErrors: Array<string>
}

export const profileApi = {
    async getProfileAPI(userId: number | null) {
        const response = await instanse.get<getProfileAPIType>(`profile/${userId}`);
        return response.data;
    },
    async getStatusAPI(userId: number) {
        const response = await instanse.get<getStatusAPIType>(`profile/status/${userId}`);
        return response.data;
    },
    async updateStatusApi(status: string) {
        const response = await instanse.put<updateStatusApiType>(`profile/status`, { status: status });
        return response.data;
    },
    async savePhotoApi(photoFile: any) {
        let formData = new FormData()
        formData.append('image', photoFile)
        const response = await instanse.put<savePhotoApiType>(`profile/photo`, formData);
        return response.data;
    },
    async updateProfileInfoApi(profile: ProfileType) {
        const response = await instanse.put<updateStatusApiType>('profile', profile);
        return response.data;
    }
}


type meApiType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodeEnum
    messages: Array<string>

}
type loginApiType = {
    data: { userId: number }
    resultCode: ResultCodeForCaptchaEnum | ResultCodeEnum
    messages: Array<string>

}
type logoutApiType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>

}

export const authApi = {
    async meAPI() {
        const response = await instanse.get<meApiType>(`auth/me`);
        return response.data;
    },
    async loginAPI(email: string, password: string, rememberMe = false, captcha: string | null = null) {

        let response = await instanse.post<loginApiType>(`auth/login`, { email, password, rememberMe, captcha })
        return response.data
    },
    async logoutAPI() {
        const response = await instanse.delete<logoutApiType>(`auth/login`);
        return response.data;
    },

}
type getCaptchaAPIType = {
    url: string
}
export const securityApi = {
    async getCaptchaAPI() {
        let response = await instanse.get<getCaptchaAPIType>(`/security/get-captcha-url`)
        return response

    }
}