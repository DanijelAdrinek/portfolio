import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import "aos/dist/aos.css";
import { Suspense } from "react";
import Loading from "./loading";
import CodeWrapper from '@/components/codeWrapper/codeWrapper';
import AnimationController from "@/components/animationController/animationController";

export default function Home() {

  return (
    <Suspense fallback={<Loading/>}>
      <AnimationController>
        <Intro/>
        <Info/>
        <CodeWrapper />
        <div style={{width: '100%', height: '100vh'}}></div>
      </AnimationController>
    </Suspense>
  );
}
