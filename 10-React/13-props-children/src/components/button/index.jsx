import css from "./index.module.css"

export default function ProfileButton(props) {
  return (
    <a className={css.wrapper} href={props.href} target="_blank">
      {props.children}
    </a>
  )
}