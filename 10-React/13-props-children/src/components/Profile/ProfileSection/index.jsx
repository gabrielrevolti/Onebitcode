import css from "./index.module.css"

export default function ProfileSection(props) {
  return (
    <div className={css.wrapper}>
      {props.children}
    </div>
  )
}