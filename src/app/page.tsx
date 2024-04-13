"use client"

import Info from "./(components)/info/info";
import Intro from "./(components)/intro/intro";
import { useState, useEffect } from 'react';
import "aos/dist/aos.css";
import CacheHandler from "@/utils/CacheHandler";
import AnimationHandler from "@/utils/AnimationHandler";

export default function Home() {

  const cacheHandler = new CacheHandler()

  const [useAnimations, setUseAnimations] = useState(cacheHandler.readCache('animations')); 

  function toggleUseAnimation() {

    if(useAnimations === "true") {
      setUseAnimations("false");
    } else {
      setUseAnimations("true")
    }
  }

  useEffect(() => {
    const animationHandler = new AnimationHandler();

    console.log(useAnimations);

    if(useAnimations !== 'false') {
      animationHandler.enableAnimations();
    } else {
      animationHandler.disableAnimations();
    }
  }, [useAnimations]);

  return (
    <>
      <main>
        <Intro/>
        <Info/>
      </main>

    </>
  );
}
