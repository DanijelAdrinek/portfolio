import Info from "@/components/Info";
import Intro from "@/components/Intro";
import "aos/dist/aos.css";
import { Suspense } from "react";
import Loading from "./loading";
import CodeWrapper from '@/components/CodeWrapper';
import AnimationController from "@/components/AnimationController";
import AuditResults from '../components/AuditResults';

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
