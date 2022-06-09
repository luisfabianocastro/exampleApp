import { IData } from "./IData.model";

export interface IUser {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IData[];
}