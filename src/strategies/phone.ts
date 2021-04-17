import type { FormattingStrategy } from '@tagged/format/dist/types/FormattingStrategy';
import { formatToPhone } from 'brazilian-values';

type PhoneStrategy = FormattingStrategy<string, {}>

export const extract: PhoneStrategy['extract'] = ({ phone }) => phone ? [phone, {}] : undefined

export const format: PhoneStrategy['format'] = (value) => formatToPhone(value)

export const phone: PhoneStrategy = {
  extract,
  format,
  namespace: 'phone'
}
