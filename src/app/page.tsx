"use client"

import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import "aos/dist/aos.css";
import { useAnimations } from "@/hooks";
import { Suspense } from "react";
import Loading from "./loading";
import CodeWrapper from '../components/code-wrapper/code-wrapper';

export default function Home() {

  const {areAnimationsEnabled, setAnimations} = useAnimations();

  const toggleAnimations = () => setAnimations(!areAnimationsEnabled);

  return (
    <Suspense fallback={<Loading/>}>
      <main>
        <Intro/>
        <Info/>
        <CodeWrapper/>
        <div style={{width: '100%', height: '100vh'}}></div>
        <button onClick={toggleAnimations}>TOGGLE ANIMATIONS!</button>
      </main>
    </Suspense>
  );
}
