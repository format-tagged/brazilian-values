import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy'
import { formatToRG } from 'brazilian-values'

type RgStrategy = FormattingStrategy<string, { state: string }>

export const extract: RgStrategy['extract'] = ({ rg, state = 'SP' }) =>
  rg ? [rg, { state }] : undefined

export const format: RgStrategy['format'] = (value, _, __, { state }) =>
  formatToRG(value, state)

export const rg: RgStrategy = {
  extract,
  format,
  namespace: 'rg'
}
