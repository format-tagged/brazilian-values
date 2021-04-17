const list = require('../../dist/strategies/list')
const { getFormat } = require('@tagged/format')
const { formatToList } = require('brazilian-values')
const { expect } = require('chai')

const sampleList = ['"a"', '"b"', '"c"', '"d"', '"e"', '"f"', '"g"']
const formattedList = formatToList(sampleList)

describe('Strategies > List', () => {
  describe('extract', () => {
    it('Extracts list correctly', () => {
      expect(list.extract({ list: sampleList })).to.eql([sampleList, {}])
    })

    it('Is able to extract any type', () => {
      expect(list.extract({ list: 123 })).to.eql([123, {}])
    })
  })

  describe('format', () => {
    it('Formats lists according to brazilian-values', () => {
      expect(list.format(sampleList)).to.eql(formattedList)
    })
  })

  describe('usage', () => {
    const format = getFormat([list])

    it('Works correctly with format function', () => {
      expect(format`${{ list: sampleList }}`).to.eql(formattedList)
    })

    it('Works correctlty in a sentence', () => {
      const result = format`Algumas letras: ${{ list: sampleList }}`
      expect(result).to.eql(`Algumas letras: ${formattedList}`)
    })
  })
})
