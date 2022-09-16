import type { NextPage } from 'next'
import Head from 'next/head'

import MainLayout from 'Layout/MainLayout/MainLayout'

const IndexPage: NextPage = () => {
  return (
    <div className="text-center">
      <Head>
        <title>starter kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout></MainLayout>
    </div>
  )
}

export default IndexPage
