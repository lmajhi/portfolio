import styles from '../styles/Home.module.css'
import Image from "next/image";
import { useEffect, useState } from 'react';
const profileLinks = [
  {
    id: 1,
    name: "twitter",
    link: "https://twitter.com/Lakshyaing"
  },
  {
    id: 2,
    name: "facebook",
    link: "https://www.facebook.com/lakshyaing/"
  },{
    id: 3,
    name: "linkedin",
    link: "https://www.linkedin.com/in/laxminarayan-majhi-355397b3/"
  },
  {
    id: 4,
    name: "github",
    link: "https://github.com/lmajhi"
  },
  {
    id: 4,
    name: "github",
    link: "https://github.com/lmajhi"
  }
]
const HeadLine = () => {
  return  (<div className={styles.headline}>
      <p >Laxminarayan Majhi</p>
      <br></br>
    <p>Senior Software Engineer</p>
  </div>)
}

const HeadImage = () => {
  return ( <div className={styles.headImage}>
    <Image src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnintendoeverything.com%2Fwp-content%2Fuploads%2Fpikachu-1.jpg&f=1&nofb=1"}
    height={300}
    width={300}/>
  </div>)
}

const ProfileLinks = () => {
  const listItem = profileLinks.map(item => {
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
