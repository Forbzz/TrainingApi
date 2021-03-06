import axios from "axios";


const BASE_URL = "http://localhost:44344/api/";

//const BASE_URL = "http://localhost:44385/api/";
const configAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const ENDPOINTS = {
    CUSTOMER: 'Customer',
    FOODITEM: 'FoodItem',
    ORDER: 'Order'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord, configAxios),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
}

export const authHeader = () =>{
    let token = localStorage.getItem('user');

    if(token){
        return {'Authorization': 'Bearer ' + token};
    }else{
        return {};
    }
}

export const logout = () =>{
    localStorage.removeItem('user');
}