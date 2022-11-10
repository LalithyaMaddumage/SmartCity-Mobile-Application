import axios from "axios";
const HOST = "http://192.168.8.183:4000"

//add water cut details 
export const AddWaterCut = async(payload) =>{
    console.log("payload for register", payload);
    try {
        console.log("try.....");
        const response = await axios.post(`${HOST}/Water/AddWShedule`, payload)
        if (response) {
            console.log("res..",response);
            return { ok: true }
        }
    } catch (error) {
        return {
            ok: false,
        };
    }
}

//retrive all water cut details
export const getShedule = async () => {
    try {
        const response = await axios.get(`${HOST}/Water/getWShedule`);
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

//update water cut details
export const updateShedule = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/Water/updateWShedule/${id}` ,payload);
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

//delete water cut details
export const DeleteShedule = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/Water/deleteWShedule/${id}`);
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