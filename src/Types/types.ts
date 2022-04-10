export type ProfilePhotosType = {
    large: string | null
    small: string | null
}
export type ProfileContactsType = {
    facebook: string | null
    vk: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type ProfileType = {
    aboutMe: string | null
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    userId: number
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}