const cpf = require('../../dist/strategies/cpf')
const { getFormat } = require('@tagged/format')
const { formatToCPF } = require('brazilian-values')
const { expect } = require('chai')

const randomCpf = '16738835086'
const formattedCpf = formatToCPF(randomCpf)

describe('Strategies > CPF', () => {
  describe('extract', () => {
    it('Extracts cpf correctly', () => {
      expect(cpf.extract({ cpf: randomCpf })).to.eql([randomCpf, {}])
    })

    it('Is able to extract any type', () => {
      expect(cpf.extract({ cpf: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats CPFs according to brazillian-values', () => {
      expect(cpf.format(randomCpf)).to.eql(formattedCpf)
    })
  })

  describe('usage', () => {
    const format = getFormat([cpf])

    it('Works correctly with format function', () => {
      expect(format`${{ cpf: randomCpf }}`).to.eql(formattedCpf)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu CPF é ${{ cpf: randomCpf }}`).to.eql(
        `Seu CPF é ${formattedCpf}`
      )
    })
  })
})
