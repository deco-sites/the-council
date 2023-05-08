import { AppProps } from "$fresh/server.ts";
import Head from "deco-sites/fashion/sections/Head.tsx";

function App(props: AppProps) {
  return (
    <>
      {/* Include default fonts and css vars */}

      {/* Include Icons and manifest */}
      <Head />

      {/* Rest of Preact tree */}
      <props.Component />
    </>
  );
}

export default App;
