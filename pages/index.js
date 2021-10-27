import styles from '../styles/Home.module.css'
import Image from "next/image";
import profileData from "../profile.json";
import profilePic from "../public/profilepic.png"

const HeadLine = () => {
  return  (<div className={styles.headline}>
      <p >{profileData.personalInfo.name}</p>
      <br></br>
    <p>{profileData.personalInfo.designation}</p>
  </div>)
}

const HeadImage = () => {
  return ( <div className={styles.headImage}>
    <Image src={profilePic}
    height={300}
    width={300}/>
  </div>)
}

const ProfileLinks = () => {
  const listItem = profileData.links.map(item => {
    return (
      <div className={styles.linkItem}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
      </div>
    )
    })

  return (
    <div className={styles.profileLinkContainer}>
      {listItem}
    </div>
  )
}

const Bio = () => {
  return (
    <div className={styles.bioContainer}>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
     
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <HeadLine/>
        <HeadImage/>
      </div>
      <ProfileLinks />
      <Bio />
    </div>
  )
}
