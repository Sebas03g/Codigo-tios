import http from './http.js';

export const create = async (data, clase) => {
    const res = await http.post(`/${clase}`, data);
    return res.data;
}

export const findById = async (id, clase) => {
    const res = await http.get(`/${clase}/${id}`);
    return res.data;
}

export const findAll = async (clase) => {
    const res = await http.get(`/${clase}`);
    return res.data;
}

export const update = async (data, clase, id) => {
    const res = await http.put(`/${clase}/${id}`, data);
    return res.data;
}

export const remove = async (clase, id) => {
    const res = await http.delete(`/${clase}/${id}`);
    return res.data;
}