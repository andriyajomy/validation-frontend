import {baseUrl} from './baseUrls'
import {commonAPI} from './commonAPIs'
// api call register

export const registerAPI = async(user)=>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")
}

// api call register

export const loginAPI = async (user)=>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}

