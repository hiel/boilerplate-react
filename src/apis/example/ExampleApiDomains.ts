import { SliceResponseData } from "@/apis/ApiDomains"

export interface GetInfiniteScrollExampleRequest {
  page: number,
}

export interface GetInfiniteScrollExampleResponse {
  slice: SliceResponseData<GetInfiniteScrollExampleResponseDetail>,
}

interface GetInfiniteScrollExampleResponseDetail {
  name: string,
}
