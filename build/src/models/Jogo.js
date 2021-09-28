"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    // Criar um mecanismo que crie um id a
    // cada novo jogo sem que eu passe o id no construtor.
    // vai ser necessário uma variável estática para isso. // static.
    constructor(mandante, visitante, dataHora) {
        this.id = Jogo.lista.length + 1;
        this.mandante = mandante;
        this.visitante = visitante;
        this.dataHora = dataHora;
        Jogo.lista = [...Jogo.lista, this];
    }
    getMandante() {
        return this.mandante;
    }
    getVisitante() {
        return this.visitante;
    }
    getId() {
        return this.id;
    }
    getGolsMandante() {
        return this.golsMandante;
    }
    getGolsVisitante() {
        return this.golsVisitante;
    }
    getDataHora() {
        return this.dataHora;
    }
    static getLista() {
        return Jogo.lista;
    }
    atualizaResultado(golsMandante, golsVisitante) {
        this.golsMandante = golsMandante;
        this.golsVisitante = golsVisitante;
    }
}
exports.default = Jogo;
Jogo.lista = [];
//# sourceMappingURL=Jogo.js.map