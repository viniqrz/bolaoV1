import Time from "./src/models/Time";
import Jogo from "./src/models/Jogo";
import Rodada from "./src/models/Rodada";

const galo = new Time("Atlético Mineiro");
const coelho = new Time("America Mineiro");

const horaJogo1 = new Date(2021, 8, 10, 14, 0, 0);
const jogo01 = new Jogo(galo, coelho, horaJogo1);

const rodada1 = new Rodada(1);
rodada1.addJogo(jogo01);

console.log(rodada1.getHorarioLimiteAposta() === horaJogo1);
