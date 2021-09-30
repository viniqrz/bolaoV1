import Usuario from "./Usuario";
import ApostaJogo from "./ApostaJogo";

export default class ApostaRodada {
  protected readonly usuario: Usuario;
  protected readonly apostasJogos: ApostaJogo[];

  /**
   * @todo
   *
   * contructor
   * getters
   */

  /**
   * Atualiza a pontução de cada jogo na Rodada e retorna a pontuacão total do usuario.
   *
   * @return a pontuação do usuário na rodada
   */
  public atualizaPontuacao(): number {
    // @todo
    return -1;
  }
}
