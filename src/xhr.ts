export interface Xhr {
  json<A>(url: string, opts?: any): Promise<A | undefined>;
  form(data: any): any;
  headers(url: string): Promise<any>
};
