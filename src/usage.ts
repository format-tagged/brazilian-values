import { getFormat } from '@tagged/format'
import { strategies } from './'

const format = getFormat(strategies.all) // or strategies.cpf, strategies.cnpj...

const cpf = '72703064004'
const cep = '58805370'

console.log(format`Seu CPF é ${{ cpf }} e seu CEP é ${{ cep }}`)