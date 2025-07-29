import axios from "axios";

import createAuthRefreshInterceptor from "axios-auth-refresh";

const axiosService = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosService.interceptors.request.use(async (config) => {
    /**
     * Retrieving the access token from the local Storage and adding it to the headers of the request
     */
    const { access } =
        JSON.parse(localStorage.getItem("auth"));
    config.headers.Authorization = `Bearer ${access}`;
    return config;
});

