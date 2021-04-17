# brazilian-values

VitorLuizC/brazilian-values integration for format-tagged

## Usage

```typescript
import { getFormat } from '@tagged/format'
import { strategies } from '@tagged/brazilian-values'

const format = getFormat(strategies.all) // or strategies.cpf, strategies.cnpj...

const cpf = '72703064004'
const cep = '58805370'

console.log(format`Seu CPF é ${{ cpf }} e seu CEP é ${{ cep }}`)
// Seu CPF é 727.030.640-04 e seu CEP é 58805-370
```
