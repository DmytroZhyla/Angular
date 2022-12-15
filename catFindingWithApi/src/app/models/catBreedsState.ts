export interface CatsBreedsState {
  breeds: CatsBreeds[],
  status: "pending" | "loading" | "success" | "error",
  error: null | string,
  currentBreedUrl: string | null
}

export interface CatsBreeds {
  name: string,
  id: string
  image: {
    id: string
    url: string
  }
}
