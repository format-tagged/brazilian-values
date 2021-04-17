import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy';
import { formatToGenericPhone } from 'brazilian-values';

type GenericPhoneStrategy = FormattingStrategy<string, {}>

export const extract: GenericPhoneStrategy['extract'] = ({ genericPhone }) => genericPhone ? [genericPhone, {}] : undefined

export const format: GenericPhoneStrategy['format'] = (value) => formatToGenericPhone(value)

export const genericPhone: GenericPhoneStrategy = {
  extract,
  format,
  namespace: 'genericPhone'
}
