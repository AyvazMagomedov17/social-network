
import { ProfileType, ResultCodeEnum, ProfilePhotosType, UsersDataType, ResultCodeForCaptchaEnum } from './../Types/types';
import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "04dd371b-4da8-4f89-896c-4e0e5c4f02b4"
    }

})

type getUsersAPIType = {
    error: null | string
    totalCount: number
    items: Array<UsersDataType>


}
type getCaptchaAPIType = {
    url: string
}
type getProfileAPIType = ProfileType
type getStatusAPIType = string
export type updateStatusApiType = {
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
export type GetAllDialogsAPIType = {
    id: number | null
    lastDialogActivityDate: string | null
    lastUserActivityDate: string | null
    hasNewMessages: boolean
    newMessagesCount: number
    photos: ProfilePhotosType
    userName: string
}
export type GetOneMessageType = {
    addedAt: string
    body: string
    id: string
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: any
    viewed: boolean
}
type GetMessagesAPIType = {
    error: null | string
    items: Array<GetOneMessageType>
    totalCount: number
}
export type SendOneMessageType = {
    addedAt: string
    body: string
    id: string
    recipientId: number
    senderId: number
    senderName: string
    translatedBody: any
    viewed: boolean
    deletedByRecipient: boolean
    deletedBySender: boolean
    distributionId: null | number
    isSpam: boolean
    recipientName: string
}
type SendMessagesAPIType = {
    data: { message: SendOneMessageType }
    resultCode: ResultCodeEnum
    messages: Array<string>
    fieldsErrors: Array<string>
}

export const usersApi = {
    async getUsersAPI(currentPage: number, pageSize: number) {
        const response = await instanse.get<getUsersAPIType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async filterUsersAPI(currentPage: number, pageSize: number, term: string = '', friend?: null | string) {
        const response = await instanse.get<getUsersAPIType>(`users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
        return response.data
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
    },
    async getIsFollowedApi(id: number | null) {
        const response = await instanse.get<boolean>(`/follow/${id}`)
        return response.data
    }

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

export const securityApi = {
    async getCaptchaAPI() {
        let response = await instanse.get<getCaptchaAPIType>(`/security/get-captcha-url`)
        return response

    }
}

export const dialogsApi = {
    async startDialogAPI(userId: number) {
        let response = await instanse.put<updateStatusApiType>(`dialogs/${userId}`)
        return response.data
    },
    async getAllDialogsAPI() {
        const response = await instanse.get<Array<GetAllDialogsAPIType>>(`dialogs`)
        return response.data
    },
    async getMessagesAPI(userId: number, page: number = 1, count: number = 20) {
        const response = await instanse.get<GetMessagesAPIType>(`dialogs/${userId}/messages?count=${count}&page=${page}`)
        return response.data
    },
    async sendMessagesAPI(userId: number, body: string) {
        const response = await instanse.post<SendMessagesAPIType>(`dialogs/${userId}/messages`, { body: body })
        return response.data
    },
    async getCountOfNewMessagesAPI() {
        const response = await instanse.get<number>(`dialogs/messages/new/count`)
        return response.data
    }
}