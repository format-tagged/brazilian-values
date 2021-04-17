const genericPhone = require('../../dist/strategies/genericPhone')
const { getFormat } = require('@tagged/format')
const { formatToGenericPhone } = require('brazilian-values')
const { expect } = require('chai')

const randomPhone = '12345678'
const formattedPhone = formatToGenericPhone(randomPhone)

describe('Strategies > Generic Phone', () => {
  describe('extract', () => {
    it('Extracts genericPhone correctly', () => {
      expect(genericPhone.extract({ genericPhone: randomPhone })).to.eql([randomPhone, {}])
    })

    it('Is able to extract any type', () => {
      expect(genericPhone.extract({ genericPhone: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats phones according to brazillian-values', () => {
      expect(genericPhone.format(randomPhone)).to.eql(formattedPhone)
    })
  })

  describe('usage', () => {
    const format = getFormat([genericPhone])

    it('Works correctly with format function', () => {
      expect(format`${{ genericPhone: randomPhone }}`).to.eql(formattedPhone)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu telefone é ${{ genericPhone: randomPhone }}`).to.eql(
        `Seu telefone é ${formattedPhone}`
      )
    })
  })
})
