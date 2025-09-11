type Headers = {
    'Content-Type'?: string,
     Authorization?: string,
}
type Options = {
    method: string;
    headers?: Headers;
    body?: string | FormData;
    cache?: string;
};
export interface IRequests {
    url: string;
    options?: Options;

}