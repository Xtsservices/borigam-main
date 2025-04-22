// pages/_app.tsx
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' for older versions
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          fontFamily: "'Lexend Deca', sans-serif",
        }}
      >
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
