const cep = require('../../dist/strategies/cep')
const { getFormat } = require('@tagged/format')
const { formatToCEP } = require('brazilian-values')
const { expect } = require('chai')

const randomCep = '79904382'
const formattedCep = formatToCEP(randomCep)

describe('Strategies > CEP', () => {
  describe('extract', () => {
    it('Extracts cep correctly', () => {
      expect(cep.extract({ cep: randomCep })).to.eql([randomCep, {}])
    })

    it('Is able to extract any type', () => {
      expect(cep.extract({ cep: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats CEPs according to brazillian-values', () => {
      expect(cep.format(randomCep)).to.eql(formattedCep)
    })
  })

  describe('usage', () => {
    const format = getFormat([cep])

    it('Works correctly with format function', () => {
      expect(format`${{ cep: randomCep }}`).to.eql(formattedCep)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu CEP é ${{ cep: randomCep }}`).to.eql(
        `Seu CEP é ${formattedCep}`
      )
    })
  })
})
