import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const FuelAdd = async (payload) => {
    console.log("payload for register", payload);
    try {
        const response = await axios.post(`${HOST}/Fuel/Fuel`, payload)
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
export const getFuelStation = async () => {
    try {
        const response = await axios.get(`${HOST}/Fuel/getFuel`);
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

export const updateFuel = async (id,payload) =>{
    try {
        const response = await axios.put(`${HOST}/Fuel/update/${id}` ,payload);
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

export const DeleteFuel = async (id) =>{
    try {
        const response = await axios.delete(`${HOST}/Fuel/deleteF/${id}`);
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