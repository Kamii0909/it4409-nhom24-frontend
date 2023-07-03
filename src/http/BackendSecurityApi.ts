import { AxiosResponse } from "axios";
import { BackendHttpClient } from "./internal/BackendHttpClient";

export async function getCurrentUser(): Promise<any> {
    return BackendHttpClient.get('/user/current').then(res => res.data)
}

export async function loginWithBasicAuth(username: string, password: string): Promise<AxiosResponse> {
    return BackendHttpClient
        .post('/login',
            { params: { username: username, password: password } },
            { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
}

export async function logout(): Promise<AxiosResponse> {
    return BackendHttpClient
        .post('/logout');
}