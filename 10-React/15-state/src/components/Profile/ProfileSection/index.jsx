import css from "./index.module.css"

export default function ProfileSection(props) {
  return (
    <div 
      {...props}
      className={`${css.wrapper} ${props.className}`}>
      {props.children}
    </div>
  )
}