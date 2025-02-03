import reactLogo from '/react.png'

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} alt="reactlogo" />
      </div>

      <div>
        <h1>React</h1>
        <p>A biblioteca para interfáces de usuário web e nativas</p>
        <button>Aprenda React</button>
        <button>Referência da API</button>
        <hr/>
      </div>

      <div>
        <h2>Crie interfaces de usuário de componentes</h2>
        <p>React permite você construa interfaces de usuário a partir de pedaços individuais chamados compontentes</p>
        <hr />
      </div>

      <div>
        <h2>Escreva componentes com código e marcação</h2>
        <p>Componentes React são funções JavaScript.A sintaxe de marcação é chamada de JSX.É uma extensão da sintaxe JavaScript popularizada pelo React.</p>
        <hr />
      </div>

      <div>
        <h2>Próximos passos</h2>
        <ul>
          <li>Uso de dados dinâmicos no JSX</li>
          <li>Criação de novos componentes</li>
          <li>Estilização de componentes</li>
          <li>Reutilização de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos do JavaScript</li>
        </ul>
      </div>
    </>
  )
}

export default App
