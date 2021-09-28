"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Time_1 = __importDefault(require("./src/models/Time"));
const Jogo_1 = __importDefault(require("./src/models/Jogo"));
const Rodada_1 = __importDefault(require("./src/models/Rodada"));
const galo = new Time_1.default("Atlético Mineiro");
const coelho = new Time_1.default("America Mineiro");
const horaJogo1 = new Date(2021, 8, 10, 14, 0, 0);
const jogo01 = new Jogo_1.default(galo, coelho, horaJogo1);
const rodada1 = new Rodada_1.default(1);
rodada1.addJogo(jogo01);
console.log(rodada1.getHorarioLimiteAposta() === horaJogo1);
//# sourceMappingURL=index.js.map