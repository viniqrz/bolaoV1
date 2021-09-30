# Semana 3 - NodeJS, Bibliotecas Padrões e Event Loop.

## File System

```typescript
import fs from "fs";

fs.writeFileSync("filename.txt", "Hello World!");

const data = fs.readFileSync("filename.txt");
console.log(data.toString());
```

### Buffer

### JSON

```typescript
import fs from "fs";
import Time from "./src/models/Time";

const timesFileContent: Buffer = fs.readFileSync("./files/times.json");

type TimeFile = {
  id: number;
  nome: string;
  estado: string;
};

const timesFile = JSON.parse(timesFileContent.toString()) as TimeFile[];

const times: Time[] = [];
for (const timeFile of timesFile) {
  times.push(new Time(timeFile.id, timeFile.nome, timeFile.estado));
}

times.sort((t1, t2) => t1.getId() - t2.getId());

fs.writeFileSync("./files/times-por-id.json", JSON.stringify(times, null, 2));
```


## Project Structure - Repositories

- JogosRepository
- TimesRepository

## Base64
## Cripto
## Sync vs Async
### Performance
### Event-Loop


## Erros e Exceptions
