export default class Time {
  protected readonly nome: string;

  public constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }
}
