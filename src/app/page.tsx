"use client"

import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import "aos/dist/aos.css";
import { useAnimations } from "@/hooks";
import { Suspense } from "react";
import Loading from "./loading";
import Code from "@/components/code/code";

export default function Home() {

  const {areAnimationsEnabled, setAnimations} = useAnimations();

  const toggleAnimations = () => setAnimations(!areAnimationsEnabled);

  return (
    <Suspense fallback={<Loading/>}>
      <main>
        <Intro/>
        <Info/>
        <Code note="Javascript code:">
          {
`    
dispatch(remove({ id: subscription.id }))
   .then(response => {
    if (response.data.errors && response.data.errors.length > 0) {
     dispatch(messageShow(response.data.errors[0].message))

     this.loading(false)
    } else {
     dispatch(messageShow('Unsubscribed successfully.'))

     onSuccessUnsubscribe()
    }
   })
   .catch(() => {
    dispatch(messageShow('There was some error unsubscribing. Please try again.'))

    this.loading(false)
   })
   .then(() => {
    setTimeout(() => {
     dispatch(messageHide())
    }, config.message.error.timers.long)
   })
`
            }
        </Code>
        <div style={{width: '100%', height: '100vh'}}></div>
        <button onClick={toggleAnimations}>TOGGLE ANIMATIONS!</button>
      </main>
    </Suspense>
  );
}
