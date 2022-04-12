import { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {

  const [campaignTitle, setCampaignTitle] = useState('My Campaign');

  return (
    <div className="container">
      <Head>
        <title>Journal | Daelius</title>
        <meta name="description" content="Dungeons & Dragons campaign management system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="main-content">
        <h1>Journal</h1>
      </div>
    </div>
  )
}
