import axios from "axios";
const HOST = "http://10.0.2.2:4000"

export const EventAdd = async (payload) => {
    console.log("payload for Event", payload);
    try {
        const response = await axios.post(`${HOST}/Event/EventAdd`, payload)
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
export const getEventDetails = async () => {
    try {
        const response = await axios.get(`${HOST}/Event/getEvent`);
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

//for add to favourite

export const addToFavourite = async (id,payload) => {
    try {
        const response = await axios.put(`${HOST}/Event/update/${id}`,payload);
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