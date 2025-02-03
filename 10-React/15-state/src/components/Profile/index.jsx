import { useState } from "react"
import Title from "../Title/Title"
import ProfileButton from "../button"
import ProfileSection from "./ProfileSection"
import css from "./index.module.css"


export default function Profile(props) {
  const [followText, setFollowText] = useState("Follow")
  
  function handleClick() {
    alert('Você agora está seguindo!')
    setFollowText("Following")
  }

  return (
    <div className={css.container}>
      <img className={css.avatar}src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={css.followButton} onClick={handleClick}>
          {followText}
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