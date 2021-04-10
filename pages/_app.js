import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <link rel="icon" href="favicon.png" /> */}
                <title>Shad</title>
                <meta name="title" content="Shad" />
                <meta name="description" content="Discord bot programmer." />
                <meta name="theme-color" content="#e86f6b" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
