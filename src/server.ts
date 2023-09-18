import axios from 'axios';


export const request = axios.create({
    baseURL: 'https://api.telegram.org/', 
    timeout: 10000, 
});

export const TOKEN = "6680654517:AAHfwg_Jgmzv6nDQT4AY2FE9uV6DvATstC0";
export const CHAT_ID = "-1001659420064";