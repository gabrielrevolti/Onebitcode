import Title from "../Title/Title"
import ProfileButton from "../button"
import ProfileSection from "./ProfileSection"
import css from "./index.module.css"

function handleClick(ev) {
  console.log(ev)
  alert('Você agora está seguindo!')
}

export default function Profile(props) {
  return (
    <div className={css.container}>
      <img className={css.avatar}src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={css.followButton} onClick={handleClick}>
          Follow
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={css.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <ProfileButton href={props.githubUrl}>GitHub</ProfileButton>
        <ProfileButton href={props.linkedinUrl}>Linkedin</ProfileButton>
        <ProfileButton href={props.twitterUrl}>Twitter</ProfileButton>
      </ProfileSection>
    </div>
  )
}