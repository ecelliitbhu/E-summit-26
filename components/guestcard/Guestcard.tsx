"use client";
import React, { FunctionComponent } from "react";
import { Instagram, X, Linkedin } from "../components";
import styles from "../guestcard/guest_card.module.css";
import { useRouter } from "next/navigation";
import { past_speakers_data, present_speakers_data } from "../../app/speakers/speaker_data";
import { motion } from "framer-motion";

const Guestcard: FunctionComponent = (props) => {
  const router = useRouter();
  return (
    <div className="m-auto overflow-hidden">
      <p className=" mb-2 font-bold text-4xl sm:text-5xl pb-4 flex flex-wrap justify-center  test-white">
        Current Speakers
      </p>
      <div className={styles.container}>
      {Object.values(present_speakers_data)
  .flat()
  .map((GuestData, index) => (

          <motion.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className={`${styles.card} ${styles.card0}`}
            style={{ backgroundImage: `url(${GuestData.imgURL})` }}
            key={index}
          >
            <div className={styles.border}>
              <h2 className={styles.h2}>{GuestData.name}</h2>
              <div className={styles.icons}>
                <Instagram
                  className={styles.fa}
                  onClick={() => {
                    router.push(GuestData.instaURL);
                  }}
                />
                <X
                  className={styles.fa}
                  onClick={() => {
                    router.push(GuestData.xURL);
                  }}
                />
                <Linkedin
                  className={styles.fa}
                  onClick={() => {
                    router.push(GuestData.linkedinURL);
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/*<div className={styles.container}>*/}
      {/*  {current_speakers_data.map((GuestData, index) => (*/}
      {/*    <motion.div*/}
      {/*      initial={{*/}
      {/*        y: 100,*/}
      {/*        opacity: 0,*/}
      {/*      }}*/}
      {/*      whileInView={{*/}
      {/*        y: 0,*/}
      {/*        opacity: 1,*/}
      {/*      }}*/}
      {/*      transition={{*/}
      {/*        duration: 1,*/}
      {/*      }}*/}
      {/*      viewport={{ once: true }}*/}
      {/*      className={`${styles.card} ${styles.card0}`}*/}
      {/*      style={{*/}
      {/*        backgroundImage: `url(${GuestData.imgURL})`,*/}
      {/*      }}*/}
      {/*      key={index}*/}
      {/*    >*/}
      {/*      <div className={styles.border}>*/}
      {/*        <h2 className={styles.h2}>{GuestData.name}</h2>*/}
      {/*        <div className={styles.icons}>*/}
      {/*          <Instagram*/}
      {/*            className={styles.fa}*/}
      {/*            onClick={() => {*/}
      {/*              router.push(GuestData.instaURL);*/}
      {/*            }}*/}
      {/*          />*/}
      {/*          <X*/}
      {/*            className={styles.fa}*/}
      {/*            onClick={() => {*/}
      {/*              router.push(GuestData.xURL);*/}
      {/*            }}*/}
      {/*          />*/}
      {/*          <Linkedin*/}
      {/*            className={styles.fa}*/}
      {/*            onClick={() => {*/}
      {/*              router.push(GuestData.linkedinURL);*/}
      {/*            }}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </motion.div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <p className="mb-2 font-bold text-4xl sm:text-5xl pb-4 flex justify-center  test-white">
        Past Speakers
      </p>
      <div className={styles.container}>
        {past_speakers_data.map((GuestData, index) => (
          <motion.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className={`${styles.card} ${styles.card0}`}
            style={{ backgroundImage: `url(${GuestData.imgURL})` }}
            key={index}
          >
            <div className={styles.border}>
              <h2 className={styles.h2}>{GuestData.name}</h2>
              <div className={styles.icons}>
                <Instagram
                  className={styles.fa}
                  onClick={() => {
                    router.push(GuestData.instaURL);
                  }}
                />
                <X
                  className={styles.fa}
                  onClick={() => {
                    router.push(GuestData.xURL);
                  }}
                />
                <Linkedin
                  className={styles.fa}
                  onClick={() => {
                    router.push(GuestData.linkedinURL);
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Guestcard;
