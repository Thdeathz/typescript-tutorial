class Coder {

  secondLang!: string

  constructor(
    public readonly name: string, 
    public music: string, 
    private age: number, 
    protected lang: string = 'TypeScript'
  ) {}

  public getAge() {
    return `Hello, I'm ${this.age}`
  }
}

const Dung = new Coder('Dung', 'Lofi', 18)
console.log(Dung.getAge())

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    super(name, music, age)
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const Sara = new WebDev('Macbook', 'Sara', 'Pop', 20)
console.log(Sara.getLang())
////////////////////////////////////////////////////////

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page =  new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
//////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.id = ++Peeps.count
    this.name = name
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.getCount())
//////////////////////////////////////////////////////////

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
      this.dataState = value
      return
    } else throw new Error('Param is not an array of strings')
  }
}

const myBands = new Bands();
myBands.data = ['The Beatles', 'The Rolling Stones', 'The Who']
console.log(myBands.data)
myBands.data = [...myBands.data, 'The Doors']
console.log(myBands.data)
// myBands.data = [...myBands.data, 1]