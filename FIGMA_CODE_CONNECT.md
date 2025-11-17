# Figma Code Connect - Componente Table

## Status: Em Desenvolvimento ✅

O componente `Table` React foi criado e está **100% funcional** em http://localhost:5174

### O que foi feito:

✅ **Componente React criado** (`src/Table.tsx`)
- Header turquesa (#1abc9c)
- Linhas alternadas (cinza claro #f2f2f2 e branco gelo #f9fbff)
- 4 colunas: Código, Nome, Sexo, Data
- Tipagem completa com TypeScript

✅ **Code Connect configurado** (`src/Table.figma.tsx`)
- Arquivo de conexão criado
- Apontando para o component `287:26` no Figma
- Dados de exemplo preparados

⏳ **Publicação no Figma** (em aguardo)
- Requer permissão especial `code_connect:write`
- Token em validação

## Como Usar Localmente

### Rodar a aplicação:
```bash
npm run dev
```

Acesse: http://localhost:5174

### Estrutura do Componente

**Props:**
```tsx
interface TableProps {
  dataSource: Pessoa[]
}

interface Pessoa {
  key: number
  code: string      // Código do registro
  nome: string      // Nome da pessoa
  sexo: string      // Masculino | Feminino
  data: string      // Data em formato pt-BR
}
```

**Exemplo de uso:**
```tsx
<Table dataSource={[
  { key: 1, code: '123', nome: 'Eduardo', sexo: 'Masculino', data: '15/03/2024' }
]} />
```

## Publicar no Figma

Quando tiver o token com as permissões corretas:

```bash
npx @figma/code-connect connect publish --token [SEU_TOKEN]
```

## Próximas Etapas

1. ✅ Componente React criado
2. ✅ Code Connect arquivo criado
3. ⏳ Publicar no Figma (aguardando permissões)
4. 🎨 Adicionar mais estilos customizáveis
5. 📱 Criar variantes (desktop, mobile, etc)

## Documentação

- [Figma Code Connect Oficial](https://github.com/figma/code-connect)
- [Documentação Figma](https://www.figma.com/developers/api)

