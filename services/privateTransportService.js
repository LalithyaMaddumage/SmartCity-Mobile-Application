import axios from "axios";
const HOST = "http://172.28.4.24:4000"

export const PrivateTransportAdd = async (payload) => {
    console.log("payload for register", payload);
    try {
        const response = await axios.post(`${HOST}/privateTransport/AddPrivateTransport`, payload)
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
export const getPrivateTransport = async () => {
    try {
        const response = await axios.get(`${HOST}/privateTransport/getPrivateTransport`);
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

export const updatePrivateTransport = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/privateTransport/update/${id}` ,payload);
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

export const DeletePrivateTransport = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/privateTransport/deletePT/${id}`);
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