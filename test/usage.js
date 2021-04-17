const { getFormat } = require('@tagged/format')
const { formatToCPF, formatToCEP } = require('brazilian-values')

const { strategies } = require('../dist')

const format = getFormat(strategies.all)

const cpf = '16738835086'
const formattedCpf = formatToCPF(cpf)

const cep = '79904382'
const formattedCep = formatToCEP(cep)

describe('Usage', () => {
  it('Formats strings properly', () => {
    const expectedResult = `Seu CPF é ${formattedCpf} e seu CEP é ${formattedCep}`
    const result = format`Seu CPF e ${{ cpf }} e seu CEP é ${{ cep }}`
  })
})
