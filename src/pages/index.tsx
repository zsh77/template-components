import type { NextPage } from 'next'
import Head from 'next/head'

import MainLayout from 'Layout/MainLayout/MainLayout'
import Accordion from 'Components/Accordion/Accordion'

const IndexPage: NextPage = () => {
  return (
    <div className="text-center">
      <Head>
        <title>starter kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Accordion
          data={[
            {
              title: 'لورم ایپسوم',
              text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
            },
            {
              title: 'لورم ایپسوم',
              text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
            },
            {
              title: <p>لورم ایپسوم</p>,
              text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
            },
          ]}
          id="asdasd"
        />
      </MainLayout>
    </div>
  )
}

export default IndexPage
