import Rodada from "./Rodada";
import ApostaJogo, { Palpite } from "./ApostaJogo";
import ApostaRodada from "./ApostaRodada";
import Jogo from "./Jogo";

/** O usuário do sistema que fará as apostas */
export default class Usuario {
  protected nome: string;
  protected readonly email: string;

  public constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  public aposta(rodada: Rodada, palpites: Palpite[]): ApostaRodada {
    const apostas = palpites.map((palpite) => {
      const { jogoId, golsMandante, golsVisitante } = palpite;
      const listaJogos: Jogo[] = Jogo.getLista();
      const jogo: Jogo = listaJogos.find((el) => el.getId() === jogoId);

      return new ApostaJogo(this, jogo, golsMandante, golsVisitante);
    });

    return new ApostaRodada(this, apostas);
  }
}
