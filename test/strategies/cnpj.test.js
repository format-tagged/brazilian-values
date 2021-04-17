const cnpj = require('../../dist/strategies/cnpj')
const { getFormat } = require('@tagged/format')
const { formatToCNPJ } = require('brazilian-values')
const { expect } = require('chai')

const randomCnpj = '31150349000133'
const formattedCnpj = formatToCNPJ(randomCnpj)

describe('Strategies > CNPJ', () => {
  describe('extract', () => {
    it('Extracts cnpj correctly', () => {
      expect(cnpj.extract({ cnpj: randomCnpj })).to.eql([randomCnpj, {}])
    })

    it('Is able to extract any type', () => {
      expect(cnpj.extract({ cnpj: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats CNPJs according to brazilian-values', () => {
      expect(cnpj.format(randomCnpj)).to.eql(formattedCnpj)
    })
  })

  describe('usage', () => {
    const format = getFormat([cnpj])

    it('Works correctly with format function', () => {
      expect(format`${{ cnpj: randomCnpj }}`).to.eql(formattedCnpj)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu CNPJ é ${{ cnpj: randomCnpj }}`).to.eql(
        `Seu CNPJ é ${formattedCnpj}`
      )
    })
  })
})
