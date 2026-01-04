// CSS
import "./Bio.css"

function Bio() {
  return (
    <div>
        <img src={`${import.meta.env.BASE_URL}images/github_profile_icon.png`} alt="Github Profile Icon" width="128px" />
    </div>
  )
}

export default Bio