import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy'
import { formatToCPF } from 'brazilian-values'

type CpfStrategy = FormattingStrategy<string, {}>

export const extract: CpfStrategy['extract'] = ({ cpf }) => [cpf, {}]

export const format: CpfStrategy['format'] = (value) => formatToCPF(value)

export const cpf: CpfStrategy = {
  extract,
  format,
  namespace: 'cpf'
}
