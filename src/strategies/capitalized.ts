import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy'
import { formatToCapitalized } from 'brazilian-values'

type CapitalizedStrategy = FormattingStrategy<string, {}>

export const extract: CapitalizedStrategy['extract'] = ({ capitalized }) => [capitalized, {}]

export const format: CapitalizedStrategy['format'] = (value) => formatToCapitalized(value)

export const capitalized: CapitalizedStrategy = {
  extract,
  format,
  namespace: 'capitalized'
}
