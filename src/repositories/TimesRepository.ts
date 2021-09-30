import Time from "../models/Time";

export default interface TimesRepository {
  findAll(): Time[];
}
