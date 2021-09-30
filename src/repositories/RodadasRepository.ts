import Rodada from "../models/Rodada";

export default interface RodadasRepository {
  findAll(): Rodada[];
  save(rodadas: Rodada[]): void;
}
