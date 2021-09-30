import Rodada from "../models/Rodada";
import RodadasRepository from "./RodadasRepository";

const RODADAS_FILE_PATH = "./files/rodadas.json";

export default class JSONRodadasRepository implements RodadasRepository{
  public findAll(): Rodada[] {
    // @todo
    return [];
  }

  public save(rodadas: Rodada[]): void {
    // @todo
  }
}
