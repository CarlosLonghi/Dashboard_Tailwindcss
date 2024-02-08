'use client'

import { User } from '@phosphor-icons/react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
        <User className="h-8 w-8 text-emerald-500" />
      </div>
    )
  } else {
    return (
      <img src={previewURL} className="h-16 w-16 rounded-full object-cover" />
    )
  }
}
