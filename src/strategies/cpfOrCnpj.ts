import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy'
import { formatToCPFOrCNPJ } from 'brazilian-values'

type CpfOrCpnjStrategy = FormattingStrategy<string, {}>

export const extract: CpfOrCpnjStrategy['extract'] = ({ cpfOrCnpj }) => [cpfOrCnpj, {}]

export const format: CpfOrCpnjStrategy['format'] = (value) => formatToCPFOrCNPJ(value)

export const cpfOrCnpj: CpfOrCpnjStrategy = {
  extract,
  format,
  namespace: 'cpfOrCnpj'
}
