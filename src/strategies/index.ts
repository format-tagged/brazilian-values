import { capitalized } from './capitalized'
import { cep } from './cep'
import { cnpj } from './cnpj'
import { cpf } from './cpf'
import { cpfOrCnpj } from './cpfOrCnpj'
import { list } from './list'
import { phone } from './phone'
import { rg } from './rg'

export const strategies = {
  capitalized,
  cep,
  cnpj,
  cpf,
  cpfOrCnpj,
  list,
  phone,
  rg,
  all: [capitalized, cep, cnpj, cpf, cpfOrCnpj, list, phone, rg]
}
