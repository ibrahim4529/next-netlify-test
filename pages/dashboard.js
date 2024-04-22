import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div>Dashboard
      <Link href={'/dashboard/a/101'}>A 101</Link>
      <Link href={'/dashboard/b/102'}>B 102</Link>
    </div>
  )
}
