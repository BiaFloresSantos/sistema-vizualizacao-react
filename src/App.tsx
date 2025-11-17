import { Table } from './Table'

// Tipagem dos dados
export interface Pessoa {
  key: number
  code: string
  nome: string
  sexo: string
  data: string
}

// Funções auxiliares
const nomesOriginais = [
  'Eduardo', 'Beatriz', 'Carlos', 'João',
  'Maria', 'Ana', 'Lia', 'Pedro'
]

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5)
}

const nomesUnicos = shuffle([...nomesOriginais])

function sexoPorNome(nome: string): string {
  const femininos = ['Beatriz', 'Maria', 'Ana', 'Lia']
  return femininos.includes(nome) ? 'Feminino' : 'Masculino'
}

function randomDate(): string {
  const start = new Date(2024, 0, 1)
  const end = new Date(2025, 11, 31)
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return date.toLocaleDateString('pt-BR')
}

function randomCode(): string {
  return Math.floor(100 + Math.random() * 900).toString()
}

// Gerar data source tipado
const dataSource: Pessoa[] = nomesUnicos.map((nome, i) => ({
  key: i,
  code: randomCode(),
  nome,
  sexo: sexoPorNome(nome),
  data: randomDate(),
}))

// Componente principal
function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ width: 600 }}>
        <h1>COMPONENTE ABAIXO</h1>
        <Table dataSource={dataSource} />
      </div>
    </div>
  )
}

export default App
