"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApostaRodada {
    constructor(usuario, apostasJogos) {
        this.usuario = usuario;
        this.apostasJogos = apostasJogos;
    }
    /**
     * Atualiza a pontução de cada jogo na Rodada e retorna a pontuacão total do usuario.
     *
     * @return a pontuação do usuário na rodada
     */
    atualizaPontuacao() {
        return this.apostasJogos.reduce((a, b) => a + b.atualizaPontuacao(), 0);
    }
}
exports.default = ApostaRodada;
//# sourceMappingURL=ApostaRodada.js.map