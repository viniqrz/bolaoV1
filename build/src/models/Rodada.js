"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rodada {
    constructor(numeroRodada) {
        this.jogos = [];
        this.numeroRodada = numeroRodada;
    }
    addJogo(jogo) {
        this.jogos = [...this.jogos, jogo];
    }
    getJogos() {
        return this.jogos;
    }
    getJogoById(jogoId) {
        return this.jogos.find((jogo) => jogo.getId() === jogoId);
    }
    /**
     * O horário de limite aposta de uma rodada é determinado pelo horário do jogo que ocorrer mais cedo.
     */
    getHorarioLimiteAposta() {
        return this.jogos.reduce((acc, cur) => {
            const dataHora = cur.getDataHora();
            if (dataHora <= acc)
                return dataHora;
            return acc;
        }, new Date());
    }
}
exports.default = Rodada;
//# sourceMappingURL=Rodada.js.map