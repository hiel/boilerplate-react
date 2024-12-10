import { customApi } from "@/apis/CustomApi"
import { ApiResponse } from "@/apis/ApiDomains"
import { ChangePasswordRequest } from "@/apis/user/UserApiDomains"

export class UserApi {
  static URL_PREFIX = "/users"

  static async changePassword({
    request,
  }: {
    request: ChangePasswordRequest,
  }): Promise<ApiResponse> {
    return await customApi.put({
      url: `${this.URL_PREFIX}/password`,
      requestBody: { ...request },
    })
  }
}
