import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../Layout/MainLayout/MainLayout";

import Counter from "../Modules/Counter/Counter";

const IndexPage: NextPage = () => {
  return (
    <div className="text-center">
      <Head>
        <title>starter kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Counter />
        <div className="text-red-400">aaaa</div>
      </MainLayout>
    </div>
  );
};

export default IndexPage;
