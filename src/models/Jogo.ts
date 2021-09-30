import Time from "./Time";

export default class Jogo {
  protected readonly id: number;
  protected readonly mandante: Time;
  protected readonly visitante: Time;
  protected readonly dataHora: Date;
  protected readonly golsMandante?: number;
  protected readonly golsVisitante?: number;

  // Criar um mecanismo que crie um id a
  // cada novo jogo sem que eu passe o id no construtor.
  // vai ser necessário uma variável estática para isso. // static.

  public constructor(mandante: Time, visitante: Time, dataHora: Date) {
    // implementação é com vocês.
  }

  public getMandante(): Time {
    // implementação é com vocês.
    return null;
  }

  public getVisitante(): Time {
    // implementação é com vocês.
    return null;
  }

  public getId(): number {
    // implementação é com vocês.
    return -1;
  }

  public atualizaResultado(golsMandante: number, golsVisitante: number): void {
    // @todo
  }
}
