const rg = require('../../dist/strategies/rg')
const { getFormat } = require('@tagged/format')
const { formatToRG } = require('brazilian-values')
const { expect } = require('chai')

const randomRg = '00000000A'
const formattedRg = formatToRG(randomRg, 'SP')

describe('Strategies > RG', () => {
  describe('extract', () => {
    it('Extracts rg correctly', () => {
      expect(rg.extract({ rg: randomRg })).to.eql([randomRg, { state: 'SP' }])
    })

    it('Extracts state parameter', () => {
      expect(rg.extract({ rg: randomRg, state: 'RJ' })).to.eql([
        randomRg,
        { state: 'RJ' }
      ])
    })

    it('Is able to extract any type', () => {
      expect(rg.extract({ rg: 123 })).to.eql([123, { state: 'SP' }])
    })
  })

  describe('format', () => {
    it('Formats RGs according to brazilian-values', () => {
      expect(rg.format(randomRg, undefined, undefined, { state: 'SP' })).to.eql(formattedRg)
    })
  })

  describe('usage', () => {
    const format = getFormat([rg])

    it('Works correctly with format function', () => {
      expect(format`${{ rg: randomRg }}`).to.eql(formattedRg)
    })

    it('Works correctlty in a sentence', () => {
      expect(format`Seu RG é ${{ rg: randomRg }}`).to.eql(
        `Seu RG é ${formattedRg}`
      )
    })
  })
})
