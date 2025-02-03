import Title from "../Title/Title"
import ProfileButton from "../button"
import ProfileSection from "./ProfileSection"
import css from "./index.module.css"

export default function Profile(props) {
  return (
    <div className={css.container}>
      <img className={css.avatar}src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Follow</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={css.links}>
          <ProfileButton href={props.githubUrl}>GitHub</ProfileButton>
          <ProfileButton href={props.linkedinUrl}>Linkedin</ProfileButton>
          <ProfileButton href={props.twitterUrl}>Twitter</ProfileButton>
        </div>
      </ProfileSection>
    </div>
  )
}