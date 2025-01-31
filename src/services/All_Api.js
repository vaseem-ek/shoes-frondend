import { BaseUrl } from "./Base_Url";
import commonApi from "./CommonApi";


export const registetApi=async(data)=>{
    return await commonApi(`${BaseUrl}/reg`,'POST','',data)
}

export const LoginApi=async(data)=>{
    return await commonApi(`${BaseUrl}/log`,'POST','',data)
}
//admin
export const addShoes=async(data,headers)=>{
    return await commonApi(`${BaseUrl}/admin/addShoes`,'POST',headers,data)
}
export const listShoe=async(headers)=>{
    return await commonApi(`${BaseUrl}/admin/list-shoes`,'GET',headers,"")
}