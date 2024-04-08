import Image from "next/image";
import Navigation from "./components/navigation/nav";

export default function Home() {
  return (
    <>
      <Navigation />
      <div style={{ height: "100vh", width: "100vw" } }></div>
    </>
  );
}
