import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const PartyPage = () => {
  return (
    <div>
        <Head>
        <title>Party | Daelius</title>
        <meta name="description" content="Dungeons & Dragons campaign management system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main>
        Party
      </main>
    </div>
  )
}

export default PartyPage