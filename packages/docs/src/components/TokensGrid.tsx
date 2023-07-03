import '../styles/token-grid.css'

interface TokensGridProp {
  /**
   * Com Record é possível construir um objeto com keys e values dinâmicos
   * more: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
   */
  tokens: Record<string, string>
  hasRemValue: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProp) {
  return (
    <table className='tokens-grid'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', ''))}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}