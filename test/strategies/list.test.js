const phone = require('../../dist/strategies/phone')
const { getFormat } = require('@tagged/format')
const { formatToPhone } = require('brazilian-values')
const { expect } = require('chai')

const randomPhone = '12345678'
const formattedPhone = formatToPhone(randomPhone)

describe('Strategies > Phone', () => {
  describe('extract', () => {
    it('Extracts phone correctly', () => {
      expect(phone.extract({ phone: randomPhone })).to.eql([randomPhone, {}])
    })

    it('Is able to extract any type', () => {
      expect(phone.extract({ phone: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats phones according to brazillian-values', () => {
      expect(phone.format(randomPhone)).to.eql(formattedPhone)
    })
  })

  describe('usage', () => {
    const format = getFormat([phone])

    it('Works correctly with format function', () => {
      expect(format`${{ phone: randomPhone }}`).to.eql(formattedPhone)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu telefone é ${{ phone: randomPhone }}`).to.eql(
        `Seu telefone é ${formattedPhone}`
      )
    })
  })
})
