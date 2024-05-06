import Info from "@/components/info/info";
import Intro from "@/components/intro/intro";
import "aos/dist/aos.css";
import { Suspense } from "react";
import Loading from "./loading";
import CodeWrapper from '@/components/codeWrapper/codeWrapper';
import AnimationController from "@/components/animationController/animationController";
import AuditResults from '../components/auditResults/AuditResults';

export default function Home() {

  return (
    <Suspense fallback={<Loading/>}>
      <AnimationController>
        <Intro/>
        <Info/>
        <CodeWrapper/>
        <AuditResults/>
        <div style={{width: '100%', height: '100vh'}}></div>
      </AnimationController>
    </Suspense>
  );
}
