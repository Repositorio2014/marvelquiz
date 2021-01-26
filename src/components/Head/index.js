import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Quiz Marvel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://marvelquiz.repositorio2014.vercel.app/"/>        
      </Head>
      <p>Quiz Marvel</p>
    </div>
  )
}

export default IndexPage