interface IApiResponse {
  bar: string
}
const callFooApi = async (): Promise<IApiResponse> => {
  let response = await httpRequest('foo.api/barEndpoint') //returns unknown
  if (responseIsBar(response)) {
    return response
  } else {
    throw Error("response is not of type IApiResponse")
  }
}
const responseIsBar = (response: unknown): response is IApiResponse => {
  return (response as IApiResponse).bar !== undefined
    && typeof (response as IApiResponse).bar === "string"
}

function httpRequest(arg0: string) {
  throw new Error('Function not implemented.')
}
