import type { Pessoa } from './App'

interface TableProps {
  dataSource: Pessoa[]
}

export function Table({ dataSource }: TableProps) {
  return (
    <div style={{
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #d9d9d9',
    }}>
      {/* Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        backgroundColor: '#1abc9c',
        color: 'white',
        fontWeight: 'bold',
      }}>
        <div style={{
          padding: '8px 20px',
          textAlign: 'center',
          borderRight: '1px solid #d9d9d9',
        }}>
          Código
        </div>
        <div style={{
          padding: '8px 20px',
          textAlign: 'center',
          borderRight: '1px solid #d9d9d9',
        }}>
          Nome
        </div>
        <div style={{
          padding: '8px 20px',
          textAlign: 'center',
          borderRight: '1px solid #d9d9d9',
        }}>
          Sexo
        </div>
        <div style={{
          padding: '8px 20px',
          textAlign: 'center',
        }}>
          Data
        </div>
      </div>

      {/* Rows */}
      {dataSource.map((pessoa, index) => (
        <div
          key={pessoa.key}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#f9fbff',
            borderBottom: '1px solid #d9d9d9',
          }}
        >
          <div style={{
            padding: '8px 20px',
            textAlign: 'center',
            borderRight: '1px solid #d9d9d9',
          }}>
            {pessoa.code}
          </div>
          <div style={{
            padding: '8px 20px',
            textAlign: 'center',
            borderRight: '1px solid #d9d9d9',
          }}>
            {pessoa.nome}
          </div>
          <div style={{
            padding: '8px 20px',
            textAlign: 'center',
            borderRight: '1px solid #d9d9d9',
          }}>
            {pessoa.sexo}
          </div>
          <div style={{
            padding: '8px 20px',
            textAlign: 'center',
          }}>
            {pessoa.data}
          </div>
        </div>
      ))}
    </div>
  )
}
