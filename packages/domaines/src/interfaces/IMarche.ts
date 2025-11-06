import { IAdresse } from './IAdresse'

export interface IMarche {
  id: string
  title: string
  description: string
  date: Date
  adresse: IAdresse
  image: string
}
