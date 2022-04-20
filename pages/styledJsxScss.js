import Head from "next/head";

import { Header } from "../components/Header";

export default function StyledJsx() {
  return (
    <div>
      <Head>
        <title>Styled JSX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <style jsx>{`
        .main {
          p {
            color: green;
          }
        }
      `}</style>
      <main className="main">
        <p>This is styled using a nested SCSS selector with styled-jsx</p>
      </main>
    </div>
  );
}
