import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Styled JSX with SCSS support</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
