import Navigation from "./components/navigation/nav";
import Aos from "./components/AOS component/aos";
import Intro from "./components/intro/intro";

export default function Home() {

  return (
    <>
      <Navigation />
      <main className="content-container">
        <Intro/>
      </main>


      {/* <Aos>

      </Aos> */}
    </>
  );
}
