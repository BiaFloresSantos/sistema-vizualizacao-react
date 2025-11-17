# Componente Table - Figma Code Connect

## ✅ Status: Pronto para Usar

Seu componente React `Table` foi criado com sucesso e está sincronizado com seu repositório GitHub!

---

## 📱 Visualizar o Componente

**Acesse localmente:**
```
http://localhost:5174
```

**Ou visualize no GitHub:**
```
https://github.com/BiaFloresSantos/sistema-vizualizacao-react
```

---

## 🎨 Informações do Component

**Component:** Table
**Node ID no Figma:** 287:26
**Arquivo:** `src/Table.tsx`
**Localização no GitHub:** `/src/Table.tsx`

---

## 💻 Como Usar o Componente

### Importar
```tsx
import { Table } from './Table'
import type { Pessoa } from './App'
```

### Props
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

### Exemplo
```tsx
<Table 
  dataSource={[
    { key: 1, code: '123', nome: 'Eduardo', sexo: 'Masculino', data: '15/03/2024' }
  ]} 
/>
```

---

## 🎯 Estilos

- **Header:** Background #1abc9c (turquesa), texto branco, padding 8px 20px
- **Linhas pares:** Background #f2f2f2 (cinza claro)
- **Linhas ímpares:** Background #f9fbff (branco gelo)
- **Bordas:** #d9d9d9 (cinza)
- **Layout:** Grid com 4 colunas iguais

---

## 🔗 Conectar ao Figma Manualmente

Se o Code Connect não foi publicado, você pode:

1. **No Figma**, clique no component `Table`
2. **No painel direito**, vá para **Inspect**
3. **Copie o link do GitHub:**
   ```
   https://github.com/BiaFloresSantos/sistema-vizualizacao-react/blob/main/src/Table.tsx
   ```
4. **Cole em uma anotação** no Figma como referência

---

## 📦 Tecnologias

- **React 19.2.0**
- **TypeScript 5.9.3**
- **Vite 7.2.2**
- **Figma Code Connect** (configurado)

---

## 🚀 Próximos Passos

1. ✅ Componente criado
2. ✅ Code Connect configurado
3. ✅ GitHub publicado
4. ⏳ Aguardando escopo `code_connect:write` para publicar no Figma

Quando tiver o escopo correto, execute:
```bash
npx @figma/code-connect connect publish --token [TOKEN]
```

---

## 📚 Links Úteis

- **Repositório:** https://github.com/BiaFloresSantos/sistema-vizualizacao-react
- **Figma File:** https://www.figma.com/design/qpecnSQV201YPayOajk76e/KENOJI
- **Figma Code Connect Docs:** https://github.com/figma/code-connect

---

**Status:** ✅ Pronto para Produção
**Última atualização:** 16 de Novembro de 2025
