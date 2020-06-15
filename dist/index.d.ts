export interface IndexedList<T> {
    [x: string]: T;
}
export interface IHttpExceptionOptions {
    url: string;
    status: number;
    message: string;
    statusText: string;
}
export declare class HttpException extends Error {
    url: string;
    status: number;
    statusText: string;
    constructor({ message, status, statusText, url }: IHttpExceptionOptions);
}
export interface IGithubClient {
    readonly base: string;
    readonly token: string;
    readonly fetch: (url: string, options?: IndexedList<any>) => Promise<any>;
}
export interface IGithubClientOptions {
    readonly path: string;
    readonly method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    readonly data: any;
}
export declare class GitHubClient {
    token: string;
    fetch: any;
    private base;
    private credentials;
    private headers;
    constructor({ base, token, fetch }: IGithubClient);
    get({ path }: IGithubClientOptions): Promise<any>;
    delete({ path }: IGithubClientOptions): Promise<any>;
    post({ path, data }: IGithubClientOptions): Promise<any>;
    put({ path, data }: IGithubClientOptions): Promise<any>;
    patch({ path, data }: IGithubClientOptions): Promise<any>;
    private call;
}
export default GitHubClient;
