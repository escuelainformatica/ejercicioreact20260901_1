export interface SieteRest {
  Codigo: number
  Descripcion: string
  Series: Series
  SeriesInfos: any[]
}

export interface Series {
  descripEsp: string
  descripIng: string
  seriesId: string
  Obs: Ob[]
}

export interface Ob {
  indexDateString: string
  value: string
  statusCode: string
}
