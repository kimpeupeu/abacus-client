import Head from "next/head";
import React from "react";
import FloatingHeader from "./FloatingHeader";
import Header from "./Header";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>알 빠진 주판</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FloatingHeader />
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
