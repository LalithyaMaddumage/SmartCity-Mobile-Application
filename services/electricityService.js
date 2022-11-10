import axios from "axios";
const HOST = "http://192.168.8.183:4000"

//add power cut details 
export const AddPowerCut = async(payload) =>{
    console.log("payload for register", payload);
    try {
        console.log("try.....");
        const response = await axios.post(`${HOST}/Electricity/AddEShedule`, payload)
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

//retrive all power cut details
export const getShedule = async () => {
    try {
        const response = await axios.get(`${HOST}/Electricity/getEShedule`);
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

//update power cut details
export const updateShedule = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/Electricity/updateEShedule/${id}` ,payload);
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

//delete power cut details
export const DeleteShedule = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/Electricity/deleteEShedule/${id}`);
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