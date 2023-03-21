// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number
// }
interface TransactionObj {
  readonly [index: string]: number
  Pizza: number,
  Books: number,
  Job: number
}


const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dung: 18
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for(const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 100

console.log(todaysTransactions['Dung'])
////////////////////////////////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined,
  name: string,
  GPA: number,
  classes?: number[]
}

const student: Student = {
  name: 'Dung',
  GPA: 3.5,
  classes: [100, 200]
}

// console.log(student.test)

for(const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')
////////////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sideHustle'

// type Incomes = {
//   salary: number | string,
//   bonus: number | string,
//   sideHustle: number | string
// }
type Incomes = Record<Streams, number | string> // can't set specific type for key like salary: number, bonus: string

const monthlyIncomes: Incomes = {
  salary: 1000,
  bonus: 500,
  sideHustle: 200
}

for(const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
