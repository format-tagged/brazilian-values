const cpfOrCnpj = require('../../dist/strategies/cpfOrCnpj')
const { getFormat } = require('@tagged/format')
const { formatToCPFOrCNPJ } = require('brazilian-values')
const { expect } = require('chai')

const randomCpf = '16738835086'
const randomCnpj = '31150349000133'
const formattedCpf = formatToCPFOrCNPJ(randomCpf)
const formattedCnpj = formatToCPFOrCNPJ(randomCnpj)

describe('Strategies > CPF or CNPJ', () => {
  describe('extract', () => {
    it('Extracts cpfOrCnpj correctly', () => {
      expect(cpfOrCnpj.extract({ cpfOrCnpj: randomCpf })).to.eql([
        randomCpf,
        {}
      ])
      expect(cpfOrCnpj.extract({ cpfOrCnpj: randomCnpj })).to.eql([
        randomCnpj,
        {}
      ])
    })

    it('Is able to extract any type', () => {
      expect(cpfOrCnpj.extract({ cpfOrCnpj: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats CPFs and CNPJs according to brazillian-values', () => {
      expect(cpfOrCnpj.format(randomCpf)).to.eql(formattedCpf)
      expect(cpfOrCnpj.format(randomCnpj)).to.eql(formattedCnpj)
    })
  })

  describe('usage', () => {
    const format = getFormat([cpfOrCnpj])

    it('Works correctly with format function', () => {
      expect(format`${{ cpfOrCnpj: randomCpf }}`).to.eql(formattedCpf)
      expect(format`${{ cpfOrCnpj: randomCnpj }}`).to.eql(formattedCnpj)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu CPF é ${{ cpfOrCnpj: randomCpf }}`).to.eql(
        `Seu CPF é ${formattedCpf}`
      )
      expect(format`Seu CNPJ é ${{ cpfOrCnpj: randomCnpj }}`).to.eql(
        `Seu CNPJ é ${formattedCnpj}`
      )
    })
  })
})
