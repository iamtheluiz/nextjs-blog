import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout';

export default function FirstPost(props) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <p>{props.data.join(",")}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1&max=60&count=6");
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}