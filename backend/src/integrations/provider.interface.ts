export interface ProviderResult<T=unknown>{provider:string;success:boolean;data?:T;error?:string;}
export interface ExternalProvider<TInput,TOutput>{send(input:TInput):Promise<ProviderResult<TOutput>|TOutput>;}
