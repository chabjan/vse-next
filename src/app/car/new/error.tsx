"use client";
import { useEffect } from 'react'
 
export default function NewCarError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
        <div className="py-4 flex flex-column md:flex-row md:align-items-center md:justify-content-between">
            <div className="text-3xl font-medium text-900">Error creating car - try again.</div>
        </div>
  )
}