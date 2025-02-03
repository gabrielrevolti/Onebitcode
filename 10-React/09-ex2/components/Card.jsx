import img from "/star-wars.jpg"


function Card() {
  return (
    <div className={css.container}>
    <img className={css.img} src={img} alt="Star Wars poster" />
    <div>
      <h2 className={css.title}>Pôster do filme Star Wars</h2>
      <p className={css.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
      <button className={css.button}>Comprar agora</button>
    </div>
  </div>
  )
}

export default Card()