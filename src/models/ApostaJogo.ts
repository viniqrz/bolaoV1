import Jogo from "./Jogo";
import Usuario from "./Usuario";

export type Palpite = {
  jogoId: number;
  golsMandante: number;
  golsVisitante: number;
};

export default class ApostaJogo {
  protected readonly usuario: Usuario;
  protected readonly jogo: Jogo;
  protected readonly golsMandante: number;
  protected readonly golsVisitante: number;
  protected pontos?: number;

  /**
   * @todo
   *
   * contructor
   * getters
   */

  /**
   * Compara a aposta do usuário com o resultado do jogo e
   * atualiza a quantidade de pontos feitos.
   *
   * @return Valor dos pontos feitos pelo usuário na aposta do jogo associado.
   */
  public atualizaPontuacao(): number {
    // @todo
    return -1;
  }
}
