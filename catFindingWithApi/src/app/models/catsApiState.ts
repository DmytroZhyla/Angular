export interface CatsApiState {
  cats:CatsImage[],
  status: "pending" | "loading" | "success" | "error",
  error: null | string,
}

export interface CatsImage{
  breeds:Array<any>,
  categories:Array<{}>
  id: string,
  url: string | null
}
