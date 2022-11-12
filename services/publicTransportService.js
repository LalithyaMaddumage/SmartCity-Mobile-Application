import axios from "axios";
const HOST = "http://172.28.4.24:4000"

export const PublicTransportAdd = async (payload) => {
    console.log("payload for register", payload);
    try {
        const response = await axios.post(`${HOST}/publicTransport/AddPublicTransport`, payload)
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
export const getPublicTransport = async () => {
    try {
        const response = await axios.get(`${HOST}/publicTransport/getPublicTransport`);
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


//for update fuel details

export const updatePublicTransport = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/publicTransport/update/${id}` ,payload);
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

//for update fuel details

export const DeletePublicTransport = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/publicTransport/deletePT/${id}`);
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