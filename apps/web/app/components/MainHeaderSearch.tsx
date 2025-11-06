'use client'

import { Button } from '@workspace/ui/components/button'
import { useState } from 'react'

export default function MainHeaderSearch() {
  const [search, setSearch] = useState<string>('')
  const onSubmit = () => {
    console.log('submit' + search)
  }
  return (
    <form className="relative flex w-full max-w-80 flex-col" action={onSubmit}>
      <input
        type="text"
        placeholder="Ma ville"
        className="rounded-full bg-white p-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute top-0 right-3 bottom-0 flex flex-col items-center justify-center">
        <Button type="submit">cherche</Button>
      </div>
    </form>
  )
}
