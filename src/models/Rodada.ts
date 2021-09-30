import Jogo from "./Jogo";

export default class Rodada {
  public constructor(numeroRodada: number) {
    // implementação é com vocês.
  }

  public addJogo(jogo: Jogo): void {
    // implementação é com vocês.
  }

  public getJogos(): Jogo[] {
    // implementação é com vocês.
    return [];
  }

  public getJogoById(jogoId: number): Jogo {
    // @todo
    return null;
  }

  /**
   * O horário de limite aposta de uma rodada é determinado pelo horário do jogo que ocorrer mais cedo.
   */
  public getHorarioLimiteAposta(): Date {
    // implementação é com vocês.
    return new Date();
  }
}
