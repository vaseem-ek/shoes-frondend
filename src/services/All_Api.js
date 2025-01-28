import { BaseUrl } from "./Base_Url";
import commonApi from "./CommonApi";


export const registetApi=async(data)=>{
    return await commonApi(`${BaseUrl}/reg`,'POST','',data)
}

export const LoginApi=async(data)=>{
    return await commonApi(`${BaseUrl}/log`,'POST','',data)
}