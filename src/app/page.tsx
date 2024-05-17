import Info from "@/components/Info";
import Intro from "@/components/Intro";
import "aos/dist/aos.css";
import { Suspense } from "react";
import Loading from "./loading";
import CodeWrapper from '@/components/CodeWrapper';
import AnimationController from "@/components/AnimationController";
import AuditResults from '../components/AuditResults';
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <AnimationController>
        <Intro/>
        <Info/>
        <CodeWrapper/>
        <AuditResults/>
        <ContactForm/>
      </AnimationController>
      <Footer/>
    </>
  );
}
