import Rodada from "./Rodada";
import ApostaJogo, { Palpite } from "./ApostaJogo";
import ApostaRodada from "./ApostaRodada";

/** O usuário do sistema que fará as apostas */
export default class Usuario {
  protected nome: string;
  protected readonly email: string;

  /**
   * @todo
   *
   * contructor
   * getters & setters
   */

  public aposta(rodada: Rodada, palpites: Palpite[]): ApostaRodada {
    // todo
    return null;
  }
}
