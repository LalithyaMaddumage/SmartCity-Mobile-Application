import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const WasteCenterAdd = async (payload) => {
    console.log("payload for register", payload);
    try {
        const response = await axios.post(`${HOST}/WasteCenter/WasteCenterAdd`, payload)
        if (response) {
            return { ok: true }
        }
    } catch (error) {
        return {
            ok: false, err: error.response.data.status
        };
    }
}

//for retrive the all records
export const getWasteCenter = async () => {
    try {
        const response = await axios.get(`${HOST}/WasteCenter/getWasteCenter`);
        return {
            ok: true,
            data: response.data.data,
        };
    } catch (error) {
        return {
            ok: false,
        };
    }
};


//for update WasteCenter details

export const updateWasteCenter = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/WasteCenter/update/${id}` ,payload);
        return {
            ok: true,
            data: response.data.data,
        };
    } catch (error) {
        return {
            ok: false,
        };
    }
}

//for update WasteCenter details

export const DeleteWasteCenter = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/WasteCenter/deleteW/${id}`);
        return {
            ok: true,
            data: response.data.data,
        };
    } catch (error) {
        return {
            ok: false,
        };
    }
}