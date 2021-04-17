const capitalized = require('../../dist/strategies/capitalized')
const { getFormat } = require('@tagged/format')
const { formatToCapitalized } = require('brazilian-values')
const { expect } = require('chai')

const name = 'john'
const capitalizedWord = formatToCapitalized(name)

describe('Strategies > Capitalized', () => {
  describe('extract', () => {
    it('Extracts capitalized correctly', () => {
      expect(capitalized.extract({ capitalized: name })).to.eql([name, {}])
    })

    it('Is able to extract any type', () => {
      expect(capitalized.extract({ capitalized: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Capitalizes words according to brazillian-values', () => {
      expect(capitalized.format(name)).to.eql(capitalizedWord)
    })
  })

  describe('usage', () => {
    const format = getFormat([capitalized])

    it('Works correctly with format function', () => {
      expect(format`${{ capitalized: name }}`).to.eql(capitalizedWord)
    })

    it('Works correctlty in a sentence', () => {
      const result = format`Olá, ${{ capitalized: name }}`
      expect(result).to.eql(`Olá, ${capitalizedWord}`)
    })
  })
})
