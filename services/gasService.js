import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const GasAdd = async (payload) => {
    console.log("payload for Gas details", payload);
    try {
        const response = await axios.post(`${HOST}/Gas/GasAdd`, payload)
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
export const getGasStation = async () => {
    try {
        const response = await axios.get(`${HOST}/Gas/getGas`);
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

export const updateGas = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/Gas/updateGas/${id}` ,payload);
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

//for update gas details

export const DeleteGas = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/Gas/deleteGas/${id}`);
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