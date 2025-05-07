"use client"

import style from "./style.module.css"
import Link from 'next/link';


export default function Home() {



  return (
    <>
      <div className={style.container}>
        <div className={style.loader}>
          <div className={style.box1}></div>
          <div className={style.box2}></div>
          <div className={style.box3}></div>
        </div>
      </div>
    </>

  );
}
