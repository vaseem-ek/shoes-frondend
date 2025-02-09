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
export const listShoe=async()=>{
    return await commonApi(`${BaseUrl}/admin/list-shoes`,'GET',"","")
}
export const removeShoe=async(id,headers)=>{
    return await commonApi(`${BaseUrl}/admin/remove-shoes/${id}`,'DELETE',headers,[])
}

export const editShoe=async(id,data,headers)=>{
    return await commonApi(`${BaseUrl}/admin/update-shoes/${id}`,'PUT',headers,data)
}
//users

export const getspecific=async(id)=>{
    return await commonApi(`${BaseUrl}/getSpecific/${id}`,'GET',"","")
}

export const savedShoes=async(data,headers)=>{
    return await commonApi(`${BaseUrl}/savedShoe`,'POST',headers,data)
}
export const getSaved=async(headers)=>{
    return await commonApi(`${BaseUrl}/listShoe`,'GET',headers,"")
}
export const removeSaveApi=async(id,headers)=>{
    return await commonApi(`${BaseUrl}/removeShoe/${id}`,'DELETE',headers,[])
}