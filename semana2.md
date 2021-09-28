# Orientação a Objetos.

## Ferramentas e Configuração.

- tsconfig.json
- package.json
- .eslintrc.js
- .editorconfig
- src/models/

## Introdução

_Orientação a Objetos_, O.O, é um dos paradigmas de programação, provavelmente o mais popular profissionalmente.
Ele propõe organizar suas "entidades" que representam "as regra de negócio" em classes, que por sua vez terão
métodos que definem como um objeto interage com o outro.

Comparando com o paradigma imperativo:
 - Classes "são analógas" as structs.
 - Métodos "são analogos" as funções.

Comparando com a gramática:
  - Classes são os substantivos.
  - Métodos são os verbos.
  - Interfaces são adjetivos.

## Classes e Objetos

### Class

> Utilizando o sistema de coordenadas do plano cartesiano, cada **ponto** recebe uma coordenada **x**, que representa a posição horizontal, e uma coordenada **y**, representando sua posição vertical.

```typescript
class Point {
  x: number;
  y: number;
}
```

### Contructor

É um método especial que é sempre executado toda vez que uma nova instância de uma classe seja criada, serve para garantir que todas as variáveis da classe estejam apropriadamente instânciadas, ou até mesmo verificar algumas condições.

```typescript
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

Outro exemplo:
> Uma equação do segundo grau tem os coeficientes _a_, _b_ e _c_ pertencentes aos Reais tal que _a_ seja diferente de 0.
```typescript
class SecondDegreeEquation {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    if (a === 0) {
      // falaremos de tratamento de erros mais para frente
      throw new Error("O coeficiente a não pode ser igual a zero.");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }
}
```

Perceba que os métodos de uma classe podem ter variáveis com nomes repetidos entre as propriedades da própria classe e os parametros do método.
Para referênciar os atributos da classe usa-se o termo `this.`.

Não é necessário tipar o retorno do construtor, pois ele sempre retornará uma instância da classe sendo instanciada.

### New

Para criar instâncias/objetos de uma determinada classe é necessário usar o operador `new`.
Ao pedir para criar a nova instância será necessário mandar valores para os parametros definidos no construtor da classe.

```typescript
const p1 = new Point(10, 20);
```

## Atributos

Definem os valores que uma classe armazena, podem apontar para os tipos básicos assim como para outras classes.
Vale lembrar que uma classe também é um tipo válido e pode ser modificada pelos mesmos operadores que os tipos `&`, `|` e outros.


### Readonly

Caso um atributo tenha o valor definido apenas no construtor e não é mais alterado, como se fosse uma constante pode se usar o modificador `readonly`.

```typescript
class Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
```

## Métodos

Para agrupar e organizar as funções que manipulam um objeto de determinada classe, você pode criar métodos na própria
classe que substituam as "antiquadas" funções. Dessa forma as funções que dependam de cada classe já está "agrupada" 
na classe equivalente e ainda tem a leitura dos atributos facilitados pelo termo `this.`. `this.` é um apontador do 
objeto que está invocando o método

> A distância entre os pontos A(xa, ya) e B(xb, yb) é definida pelo comprimento do segmento representado por d_ab e tem medida dada por:   
> d_ab = raiz_quadrada((xb - xa)^2 + (yb - ya)^2)

Também é comum e uma boa prática criar métodos que façam a leitura e escrita dos atributos, são chamados de getters and setters.

```typescript
class Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
  
  measureDistance(p2: Point): number {
    return Math.sqrt((p2.x - this.x) ** 2 + (p2.y - this.y) ** 2);
  }
}
```

Desconsiderando o readonly das nossas própriedades

```typescript
class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }
}

const p1 = new Point(10, 20);
p1.setX(30);
console.log(p1);
// Point { x: 30, y: 20 }
```

Ou com sintaxes ainda mais modernas. Porém eu confesso que não sou fã.

```typescript
class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }
}

const p1 = new Point(10, 20);
p1.x = 30;
console.log(p1);
// Point { _x: 30, _y: 20 }
```

Eu não gosto, pois "esconde" que o setter é um método que pode lançar excessões.
E também confunde com a ausência de setters/getters com atributos públicos.

## Visibilidade

"As boas práticas dizem" que não é interessaante uma classe acessar diretamente as propriedades de outra.
As interações entre classes diferentes deveriam ocorrer via métodos e não acessos diretos nas propriedades.
Para garantir tal "principio" existem _modificadores de visibilidade_, que podem "esconder" ou "exibir" determinados atributos e métodos de uma classe:
- `private`: visivel apenas para a classe que definiu o atributo
- `protected`: visivel para classes filhas
- `public`: visivel para todo mundo

```typescript
class Point {
    private readonly x: number;
    private readonly y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public measureDistance(p2: Point): number {
        return Math.sqrt((p2.x - this.x) ** 2 + (p2.y - this.y) ** 2);
    }
}
```

Normalmente os atributos são privados/protegidos, e caso precisem ser acessados externamente use métodos getters and setters.
Caso nenhum modificador seja utilizado os métodos serão publicos. Ainda assim é bom tornar explicita a decisão 
de que tal membro da classe é público usando o keyword mesmo quando não for necessário.

## Herança e Interfaces

Heranças e Interfaces são dois mecanismos recorrentes para organizar e reaproveitar seu código.

```typescript
class A extends B {}
```

Na herança: A é um subtipo de B. Toda instância de A também é uma instância de B. 
Uma instância de A vai ter todos os comportamentos de B (métodos e atributos).

```typescript
class A implements B {}
```

Com a interface: A se comporta como B. A terá que implementar todos os métodos que definem o comportamento de B.

> Um ponto 2D pode ser visto com um ponto 3D cujo a coordenada Z é igual a 0. Todas as propriedades matemáticas serão repeitadas.  
> Um ponto 2D é um subtipo de um ponto 3D.
> Um ponto 2D se comporta como um ponto 3D cujo z seja igual a 0.

```typescript
class Point3D {
  
    protected readonly x: number;
    protected readonly y: number;
    protected readonly z: number;

    public constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public measureDistance(p2: Point3D): number {
        return Math.sqrt((p2.x - this.x) ** 2 + (p2.y - this.y) ** 2 + (p2.z - this.z) ** 2);
    }
}

class Point2D extends Point3D {

    public constructor(x: number, y: number) {
        super(x, y, 0);
    }
}
```

Um exemplo que se encaixa bem com a orientação a objetos é a classificação dos seres vivos (taxonomia).
A hierarquia que existe na taxonomia dos seres vivos se adapta muito bem ao conceito de herança.
Para além da simples taxonomia, outras características dos seres vivos também podem ser adequadamente
abordadas, mas agora usando interfaces. Cenários como
- do que o animal se alimenta: "Carnívoros", "Herbívoros", "Omnivoros";
- ou periodo do dia com mais atividade como "Norturnos" e "Diurnos";
- ou organizações sociais como "Vivem Em Bando", "Vivem Individualmente".

```typescript
interface Carnivoros {
  caca(alimento: Animal): void;
}

interface Herbivoro {
  colhe(alimento: Planta): void;
}

interface Onivoros extends Carnivora, Herbivoro { }
```

```typescript
interface Seriazable {
  toString(): string;
  fromString(value: string): Seriazable;
}

interface Zippable {}

interface Observable {}

interface Processavel extends Seriazable, Zippable, Observable {};
```


```typescript
class Animal {
  protected vivo: boolean;
  protected fome: number;
  protected sede: number;
}

class Mamifero extends Animal {
  
  public amamentar(filhote: Mamifero): void {
    
  }
  
  public mamar(alimento: Leite): void {
    this.fome--;
  }
}

class Carnivora extends Mamifero {
}

class Ursadie extends Carnivora {}

class Ursus extends Ursadie implements Carnivoros {
  public alimentar(alimento: Animal): void {
    alimento.vivo = false;
    this.fome--;
  }
}

class Ailuropoda extends Ursadie implements Herbivoro {
  public alimentar(alimento: Planta): void {
    if (alimento instanceof Bambo) {
      this.fome--;      
    }
  }
}

class UrsusAmericanus extends Ursus {}

class PandaGigante extends Ursadie {}

class Bando<T extends Social> {
  protected membros: Array<T>;
  
  public adicionar(novoMembro: T): void {
    this.membros.push(novoMembro);
    novoMembro.setBando(this);
  }
  
  public expulsar(membro: T): void {
    this.membros.remove(membro);
    membro.setBando(null);
  }
}

class Leao extends Panthera implements Carnivora, Diurno, Social {
  
  protected bando: Bando;

  public alimentar(alimento: Animal): void {
    alimento.vivo = false;
    this.fome--;
  }
  
  public setBando(bando: Bando): void {
    this.bando = bando;
  }

  public getBando(): Bando {
    return this.bando;
  }
}

const turmaDoSimba: Bando<Leao> = new Bando<Leao>();
const simba = new Leao();
turmaDoSimba.adicionar(simba);

const x: number[] = [];
const y: Array<number> = [];
```

Ou com os exemplos da prova

> Veiculo é qualquer meio mecânico de transporte de pessoas ou coisas.
> Carro é um tipo de veículo.
> Barco é um outro tipo de veículo.
> Trem é um outro tipo de veículo. 

```typescript
class Veiculo { }
class Carro extends Veiculo { }
class Barco extends Veiculo { }
class Trem extends Veiculo { }
```

Interfaces determinam como determinadas classes se comportam e/ou como podem ser manipuladas.
> Um veículo para ser considerado pilotável precisa ser capaz de acelerar, frear, virar. 

```typescript
enum Direcao {
  Esquerda = "esquerda",
  Direita = "direita",
}

interface Pilotavel {
  acelerar(): void;
  frear(): void;
  virar(direcao: Direcao): void;
}

class Carro extends Veiculo implements Pilotavel {
    public acelerar() { }
    public frear() { }
    public virar(direcao: Direcao) { }
}

class Barco extends Veiculo implements Pilotavel {
    public acelerar() { }
    public frear() { }
    public virar(direcao: Direcao) { }
}

// Não precisa ser um veículo para ser pilotável.
class FliperamaDaytona implements Pilotavel {
    public acelerar() { }
    public frear() { }
    public virar(direcao: Direcao) { }  
}
```

> Um piloto deve ser capaz de guiar qualquer coisa que seja pilotável.

```typescript
interface Piloto {
  dirige(pilotavel: Pilotavel): void
}

class PilotoDeZerinho implements Piloto {
  
  public dirige(pilotavel: Pilotavel) {
    while(true) {
      pilotavel.acelera();
      pilotavel.virar(Direcao.Direita);
    }
  }
}
```

## Abstract

Ok legal, modelei todo os seres vivos como classes, mas eu só posso ter instâncias de seres vivos que eu sabia a espécie.
Como previnir que se crie uma instância gênerica de um "Felino". Ai vem o recurso das classes abstratas.
Classes "abstratas" são uma maneira de definir uma classe "pai" que não possa ser instanciada diretamente. 
Também pode ser útil para simplesmente unificar algum tipo de código que seria duplicado em caso contrário.

```typescript
abstract class Polygon {
  protected readonly points: Point[];

  public constructor(points: Point[]) {
    this.points = points;
  }

  public abstract getArea(): number;

  public getPerimeter(): number {
    let perimeter = 0;
    for (let i = 0; i < this.points.length; i++) {
      const j = i === 0 ? this.points.length - 1 : i - 1;
      const p1 = this.points[i];
      const p2 = this.points[j];
      perimeter += p1.measureDistance(p2);
    }

    return perimeter;
  }

  protected getSemiPerimeter(): number {
    return this.getPerimeter() / 2;
  }
}

class Triangle extends Polygon {
  public constructor(p1: Point, p2: Point, p3: Point) {
    super([p1, p2, p3]);
  }

  public getArea(): number {
    const p = this.getSemiPerimeter();
    const a = this.points[0].measureDistance(this.points[1]);
    const b = this.points[1].measureDistance(this.points[2]);
    const c = this.points[2].measureDistance(this.points[0]);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
}

class Quadrilatero extends Polygon {
  public constructor(p1: Point, p2: Point, p3: Point, p4: Point) {
    super([p1, p2, p3, p4]);
  }

  public getArea(): number {
    const l1 = this.points[0].measureDistance(this.points[1]);
    const l2 = this.points[1].measureDistance(this.points[2]);
    const d  = this.points[2].measureDistance(this.points[0]);
    const l3 = this.points[2].measureDistance(this.points[3]);
    const l4 = this.points[3].measureDistance(this.points[0]);
    
    const p1 = (l1 + l2 + d) / 2;
    const areaT1 = Math.sqrt(p1 * (p1 - l1) * (p1 - l2) * (p1 - d));

    const p2 = (l3 + l4 + d) / 2;
    const areaT2 = Math.sqrt(p2 * (p2 - l3) * (p2 - l4) * (p2 - d));
    
    return areaT1 + areaT2;
  }
}
```

## Static

Métodos e propriedades estáticas, são simplificadamente, uma alternativa dentro da Orientação a Objetos, para as variáveis globais.
Ao definir um escopo dentro da classe, se evita os efeitos negativos e principais problemas das variáveis globais.
Adicionalmente com as variáveis estáticas pode-se conseguir implementar alguns recursos interessantes. 
Para marcar um método ou atributo como estático usa-se a keyword `static`. E o resto do valor segue como normal.

No exemplo abaixo usamos o recurso em um método, `Empregado.getNumeroEmpregados`, e uma variável, `Empregado.numeroEmpregados`,
para controlar a quantidade de empregados ativos conforme o fluxo de dos métodos da classe.

```typescript
class Empregado {

  protected nome: string;
  protected email: string;
  private static numeroEmpregados = 0;

  public constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
    Empregado.numeroEmpregados++;
  }

  public getNome(): string {
    return this.nome;
  }

  public getEmail(): string {
    return this.email;
  }

  public demitir(): number {
    return --Empregado.numeroEmpregados;
  }

  public static getNumeroEmpregados(): number {
    return Empregado.numeroEmpregados;
  }
}

console.log(Empregado.getNumeroEmpregados());
const coleta = new Empregado("Paulo Coleta", "coleta@rarolabs.com.br");
const paulo =new Empregado("Paulo Fernandes", "paulo@rarolabs.com.br");
console.log(Empregado.getNumeroEmpregados());
```

Um exemplo recorrente em muitas linguagens (Java, C#, Javascript, ...) são a classes `Math`. Em linguagens que predominam
o uso de classes para agrupar métodos é comum cria uma classe que não possa ser instânciada repleta de métodos estáticos
utilitários como contas matemáticas complexas (não implementadas nos operadores básicos), manipulações de datas e timezones,
formtações de strings. No exemplo abaixo implementamos algumas funções simples que normalmente são implementadasa em uma classe Math.

> Eu quero uma classe Math que tenha as constantes PI e E(euller), com 5 casas decimais.
> Eu quero que ela calcule potencias, raizes enesima, maximo e minimo;

```typescript
abstract class Matematica {

  public static readonly E: number = 2.71828;
  public static readonly PI: number = 3.14159;

  public static maximo(a: number, b: number): number {
    return a > b ? a : b;
  }

  public static minimo(a: number, b: number): number {
    return a < b ? a : b;
  }

  public static potencia(base: number, n: number): number {
    return base ** n;
  }

  public static raiz(base: number, n: number): number {
    return Matematica.potencia(base, 1/n); 
  }
}

console.log(Matematica.maximo(20, 10));
console.log(Matematica.minimo(20, 10));
console.log(Matematica.potencia(2, 10)); // 1024
console.log(Matematica.raiz(27, 3)); // 3
console.log(Matematica.E);
console.log(Matematica.PI);
```

## Duck Typing

Duck Typing é mais um conceito que o Typescript precisa para poder suportar os códigos originários em Javascript. 
Embora recomendo evitar abusar desse recurso, é importante saber que ele está presente, pois pode ser útil em raras 
ocasiões, e está fortemente relacionado as escolhas de design da própria linguagem e de bibliotoecas.

A ideia do Duck Typing é resumida em "Se algo faz um som de pato, voa como um pato e anda com um pato, então esse algo
deve ser um pato". Isso significa que o Typescript aceita um objeto `a` como uma "instância valida" de uma classe `B`, 
se o tal objeto tiver todas os membros, atributos e funções, públicos definidos pela classe `B`. Mas é importante saber
que o operador `instanceof` consegue verificar mais formalmente e diferenciar os objetos que não forem adequadamente instânciados.

```typescript
class Pato {

  public voa(): void {
    console.log("geralmente em banado");
  }

  public anda(): void {
    console.log("geralmente desengonçado");
  }

  public quack(): void {
    console.log("quack quack");
  }
}

// donald é uma instância real de pato e é maneira adquada de se fazer as coisas.
const donald: Pato = new Pato();

const patinhas: Pato = {
  // aqui estamos abusando do DuckTyping para atribuir um "objeto sem classe" a uma variável tipada como Pato. 
  voa: () => console.log("de avião"),
  anda: () => console.log("de limonisine"),
  quack: () => console.log("educadamente"),
};

donald.voa();
donald.quack();
console.log(donald instanceof Pato); // true

patinhas.voa();
patinhas.anda();
console.log(patinhas instanceof Pato); // false
```

## Scopes

Métodos também podem ser "High Order Functions", funções que recebem ou retornam outras funções.
Porém quando declaramos funções anonimas dentro de classes, elas podem perder o contexto.

```typescript
class Jogo {

}

class Rodada {
  private jogos: Jogo[];

  public constructor() {
    this.jogos = [];
  }

  public addJogo(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  public getJogos(): Jogo[] {
    return this.jogos;
  }

  public addJogos(jogos: Jogo[]): void {
    jogos.forEach((jogo) => this.addJogo(jogo));
  }

  public addJogos_Function(jogos: Jogo[]): void {
    jogos.forEach(function(jogo: Jogo) {
      // aqui corremos (e iremos) o risco de perder o contexto e o código quebrar.
      this.addJogo(jogo);
    });
  }

  public addJogos_Self(jogos: Jogo[]): void {
    const self = this;
    jogos.forEach(function(jogo: Jogo) {
      // aqui corremos (e iremos) o risco de perder o contexto e o código quebrar.
      self.addJogo(jogo);
    });
  }

  public addJogos_Bind(jogos: Jogo[]): void {
    jogos.forEach(this.addJogo.bind(this));
  }

  public addJogos_LeiaDocumentacao(jogos: Jogo[]): void {
    jogos.forEach(this.addJogo, this);
  }

  public addJogos_Arrow(jogos: Jogo[]): void {
    jogos.forEach((jogo) => this.addJogo(jogo));
  }
}

const jogo1 = new Jogo();
const jogo2 = new Jogo();
const jogo3 = new Jogo();

const rodada = new Rodada();

rodada.addJogos([jogo1, jogo2, jogo3]);

console.log(rodada.getJogos());
```

## Generics

```
class Camisa {
  private estampa: string;

  public constructor(estampa: string) {
    this.estampa = estampa;
  }

  public getEstampa(): string {
    return this.estampa;
  }
}

class Bermuda {
  private cor: string;
  private nrBolsos: number;

  public constructor(cor: string, nrBolsos: number) {
    this.cor = cor;
    this.nrBolsos = nrBolsos;
  }

  public getDescricao(): string {
    return `Bermuda ${this.cor} com ${this.nrBolsos} bolso(s)`;
  }
}

interface Prioridade<T> {
  adiciona(valor: T): void;
  retira(): T;
}

class Fila<T> implements Prioridade<T> {

  private elementos: Array<T>;

  constructor() {
    this.elementos = [];
  }

  public adiciona(valor: T) {
    this.elementos.push(valor);
  }

  public retira(): T {
    return this.elementos.shift();
  }
}

class Pilha<T> implements Prioridade<T> {

  private elementos: T[];

  constructor() {
    this.elementos = [];
  }

  public adiciona(valor: T) {
    this.elementos.push(valor);
  }

  public retira(): T {
    return this.elementos.pop();
  }
}

const pilhaDeCamisas = new Fila<Camisa>();
pilhaDeCamisas.adiciona(new Camisa("rarolabs quimica azul"));
pilhaDeCamisas.adiciona(new Camisa("rarolabs slide to hexa"));

const pilhaDeBermudas = new Fila<Bermuda>();
pilhaDeBermudas.adiciona(new Bermuda("preta", 3));
pilhaDeBermudas.adiciona(new Bermuda("preta", 5));
pilhaDeBermudas.adiciona(new Bermuda("caqui", 7));


function lookDoDia(camisas: Prioridade<Camisa>, bermudas: Prioridade<Bermuda>): string {
  const camisaDeHoje = pilhaDeCamisas.retira();
  const bermudaDoDia = pilhaDeBermudas.retira();

  return `
    Olá seguimores,
    Hoje estou vestido com a camisa ${camisaDeHoje.getEstampa()} e minha bermuda ${bermudaDoDia.getDescricao()}
    No mais puro estilo!
    (ou a falta dele 😉).
  `;
}

console.log(lookDoDia(pilhaDeCamisas, pilhaDeBermudas));
```
