import styles from '../styles/Home.module.css'
import Image from "next/image";
import Head from "next/head";
import profileData from "../profile.json";
import profilePic from "../public/profilepic.png"
import Switch from "../components/Switch/Switch";
import { useEffect, useState } from 'react';

const HeadLine = () => {
  return  (<div className={styles.headline}>
    <p className={styles.infoName}>{profileData.personalInfo.name}</p>
    <p className={styles.infoDesignation}>{profileData.personalInfo.designation}</p>
  </div>)
}

const HeadImage = () => {
  return ( <div className={styles.headImageContainer}>
    <Image className={styles.headImage}
    src={profilePic}
    height={200}
    width={200}/>
  </div>)
}

const ProfileLinks = () => {
  const listItem = profileData.links.map((item) => {
    return (
      <div key={item.id} className={styles.linkItem}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <u>{item.name}</u></a>
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
    <p>{profileData.personalInfo.bioLong}</p>
    </div>
  )
}

export default function Home() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, []);

  return (
    <div className={styles.container}>
      <Head>
       <title> {profileData.personalInfo.name}
         </title>
      </Head>
      <Switch label={"Dark"}/>
      <div className={styles.banner}>
        <HeadLine/>
        <HeadImage/>
      </div>
      <ProfileLinks />
      <Bio />
    </div>
  )
}
