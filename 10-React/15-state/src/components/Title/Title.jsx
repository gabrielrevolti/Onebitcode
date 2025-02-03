import css from "./index.module.css"

export default function Title(props) {
  return (
    <h2 className={css.wrapper}>
      {props.children}
    </h2>
  )
}