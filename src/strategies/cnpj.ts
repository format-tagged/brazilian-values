import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy';
import { formatToCNPJ } from 'brazilian-values';

type CnpjStrategy = FormattingStrategy<string, {}>

export const extract: CnpjStrategy['extract'] = ({ cnpj }) => cnpj ? [cnpj, {}] : undefined

export const format: CnpjStrategy['format'] = (value) => formatToCNPJ(value)

export const cnpj: CnpjStrategy = {
  extract,
  format,
  namespace: 'cnpj'
}
