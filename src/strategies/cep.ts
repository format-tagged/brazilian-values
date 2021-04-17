import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy'
import { formatToCEP } from 'brazilian-values'

type CepStrategy = FormattingStrategy<string, {}>

export const extract: CepStrategy['extract'] = ({ cep }) => [cep, {}]

export const format: CepStrategy['format'] = (value) => formatToCEP(value)

export const cep: CepStrategy = {
  extract,
  format,
  namespace: 'cep'
}
