import Time from "./src/models/Time";
import Rodada from "./src/models/Rodada";

import TimesRepository from "./src/repositories/TimesRepository";
import RodadasRepository from "./src/repositories/RodadasRepository";
import JSONTimesRepository from "./src/repositories/JSONTimesRepository";
import JSONRodadasRepository from "./src/repositories/JSONRodadasRepository";

const timesRepository: TimesRepository = new JSONTimesRepository();
const rodadasRepository: RodadasRepository = new JSONRodadasRepository();

const times = timesRepository.findAll();

function geraCalendarioCampeonato(
  times: Time[],
  dataPrimeiroJogo: Date
): Rodada[] {
  // @todo Gerar um calendário de pontos corridos com ida e volta.
  // jogos serão nas quartas as 21:30 e nos domingos as 16:00.
  // Primeiro jogo será conforme o parametro
  return [];
}

const rodadas = geraCalendarioCampeonato(times, new Date(2021, 5, 23));

rodadasRepository.save(rodadas);
