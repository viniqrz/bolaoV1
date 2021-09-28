"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApostaJogo_1 = __importDefault(require("./ApostaJogo"));
const ApostaRodada_1 = __importDefault(require("./ApostaRodada"));
const Jogo_1 = __importDefault(require("./Jogo"));
/** O usuário do sistema que fará as apostas */
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    aposta(rodada, palpites) {
        const apostas = palpites.map((palpite) => {
            const { jogoId, golsMandante, golsVisitante } = palpite;
            const listaJogos = Jogo_1.default.getLista();
            const jogo = listaJogos.find((el) => el.getId() === jogoId);
            return new ApostaJogo_1.default(this, jogo, golsMandante, golsVisitante);
        });
        return new ApostaRodada_1.default(this, apostas);
    }
}
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map