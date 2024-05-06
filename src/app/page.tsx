import Info from "@/components/info/info";
import Intro from "@/components/intro/intro";
import "aos/dist/aos.css";
import { Suspense } from "react";
import Loading from "./loading";
import CodeWrapper from '@/components/codeWrapper/codeWrapper';
import AnimationController from "@/components/animationController/animationController";
import Status from "@/components/status/status";

export default function Home() {

  return (
    <Suspense fallback={<Loading/>}>
      <AnimationController>
        <Intro/>
        <Info/>
        <CodeWrapper />
        <Status title="HTML" percentage={100}>
          HTML is awesome
        </Status>
        <div style={{width: '100%', height: '100vh'}}></div>
      </AnimationController>
    </Suspense>
  );
}
