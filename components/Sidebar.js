import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h1 className="sidebar-h">Daelius</h1>
        <ul className="sidebar-ul">
            <li className="sidebar-li">
              <Link href="/">
                <a className="sidebar-link">Journal</a>
              </Link>
            </li>
            <li className="sidebar-li">
              <Link href="/party">
                <a className="sidebar-link">Party</a>
              </Link>
            </li>
            <li className="sidebar-li">
              <Link href="/battle">
                <a className="sidebar-link">Battle</a>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar