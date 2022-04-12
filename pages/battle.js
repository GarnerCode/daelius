import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const BattlePage = () => {
  return (
    <div>
        <Head>
        <title>Battle | Daelius</title>
        <meta name="description" content="Dungeons & Dragons campaign management system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main>
        Battle
      </main>
    </div>
  )
}

export default BattlePage