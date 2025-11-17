import { figma } from '@figma/code-connect'
import { Table } from './Table'
import type { Pessoa } from './App'

const sampleData: Pessoa[] = [
  { key: 1, code: '123', nome: 'Eduardo', sexo: 'Masculino', data: '15/03/2024' },
  { key: 2, code: '456', nome: 'Beatriz', sexo: 'Feminino', data: '22/06/2024' },
  { key: 3, code: '789', nome: 'Carlos', sexo: 'Masculino', data: '08/09/2024' },
  { key: 4, code: '234', nome: 'João', sexo: 'Masculino', data: '14/01/2024' },
  { key: 5, code: '567', nome: 'Maria', sexo: 'Feminino', data: '30/11/2024' },
  { key: 6, code: '890', nome: 'Ana', sexo: 'Feminino', data: '19/05/2024' },
  { key: 7, code: '345', nome: 'Lia', sexo: 'Feminino', data: '07/08/2024' },
  { key: 8, code: '678', nome: 'Pedro', sexo: 'Masculino', data: '25/12/2024' },
]

// GitHub: https://github.com/BiaFloresSantos/sistema-vizualizacao-react
// Componente React com Figma Code Connect
figma.connect(
  Table,
  'https://www.figma.com/design/qpecnSQV201YPayOajk76e/KENOJI?node-id=287:26',
  {
    example: () => (
      <Table dataSource={sampleData} />
    ),
  }
)
