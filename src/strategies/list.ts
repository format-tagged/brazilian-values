import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy';
import { formatToList } from 'brazilian-values';

type ListStrategy = FormattingStrategy<string[], {}>

export const extract: ListStrategy['extract'] = ({ list }) => list ? [list, {}] : undefined

export const format: ListStrategy['format'] = (value) => formatToList(value)

export const list: ListStrategy = {
  extract,
  format,
  namespace: 'list'
}
