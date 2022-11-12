import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const WasteAdd = async (payload) => {
    console.log("payload for register", payload);
    try {
        const response = await axios.post(`${HOST}/Waste/Waste`, payload)
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
export const getWaste = async () => {
    try {
        const response = await axios.get(`${HOST}/Waste/getWaste`);
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


//for update Waste details

export const updateWaste = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/Waste/update/${id}` ,payload);
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

//for update Waste details

export const DeleteWaste = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/Waste/deleteW/${id}`);
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