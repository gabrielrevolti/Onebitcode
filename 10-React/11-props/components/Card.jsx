
import css from "../src/index.module.css"

function Card({title, img}) {
  return (
    <div className={css.container}>
    <img className={css.img} src={img} alt={title} />
    <div>
      <h2 className={css.title}>{title}</h2>
      <p className={css.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
      <button className={css.button}>Comprar agora</button>
    </div>
  </div>
  )
}

export default Card