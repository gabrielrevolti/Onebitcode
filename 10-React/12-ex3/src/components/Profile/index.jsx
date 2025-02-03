import css from "./index.module.css"

export default function Profile(props) {
  return (
    <div className={css.container}>
      <img className={css.avatar}src={props.avatar} alt={props.name} />
      <h2 className={css.name}>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={css.links}>
        <a href={props.githubUrl} target="_blank">GitHub</a>
        <a href={props.linkedinUrl} target="_blank">Linkedin</a>
        <a href={props.twitterUrl} target="_blank">Twitter</a>
      </div>
    </div>
  )
}