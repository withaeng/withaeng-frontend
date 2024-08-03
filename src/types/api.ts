export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: ResponseError | null;
  paging: ResponsePaging | null;
}

export interface ResponseError {
  code: string;
  message: string;
}
export interface ResponsePaging {
  totalCount: number;
  page: number;
  offset: number;
}
