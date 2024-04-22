import React from 'react'
import { useRouter } from 'next/router'

export default function Hallo() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>Hallo {id}</div>
  )
}
