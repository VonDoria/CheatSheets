import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ContextProvider } from '../contexts/MainContext'
import Page from '@/components/Page';
import { useState } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider>
        <Header/>
        <Menu/>
        <Page/>
      </ContextProvider>
    </div>
  );
}
