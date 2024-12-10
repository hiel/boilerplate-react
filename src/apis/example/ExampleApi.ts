// import { customApi } from "@/apis/CustomApi"
import { ApiResponse } from "@/apis/ApiDomains"
import { GetInfiniteScrollExampleRequest, GetInfiniteScrollExampleResponse } from "@/apis/example/ExampleApiDomains"
import { ApiResultCode } from "@/apis/ApiResultCode"

export class ExampleApi {
  static URL_PREFIX = "/examples"

  static async getInfiniteScrollExamples({
    request,
  }: {
    request: GetInfiniteScrollExampleRequest,
  }): Promise<ApiResponse<GetInfiniteScrollExampleResponse>> {
    const response = new ApiResponse({
      resultCode: ApiResultCode.SUCCESS,
      data: {
        slice: {
          content: [
            {name: `example${request.page}`},
          ],
          pageSize: 1,
          hasNext: false,
        },
      },
    })
    return Promise.resolve(response)
    // return await customApi.get({
    //   url: `${this.URL_PREFIX}/infinite-scroll`,
    //   queryParams: { ...request },
    // })
  }
}
