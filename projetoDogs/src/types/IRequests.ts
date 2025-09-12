type Headers = {
    'Content-Type'?: string,
     Authorization?: string,
}
type Options = {
    method?: string;
    headers?: Headers;
    body?: string | FormData | null;
    cache?: RequestCache;
};
export interface IRequests {
    url: string;
    options?: Options;

}