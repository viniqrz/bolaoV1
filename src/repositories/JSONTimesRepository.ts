import Time from "../models/Time";
import TimesRepository from "./TimesRepository";

const TIMES_FILE_PATH = "./files/times.json";

type TimeFile = {
  id: number;
  nome: string;
  estado: string;
};

export default class JSONTimesRepository implements TimesRepository {
  public findAll(): Time[] {
    // @todo
    return [];
  }
}
