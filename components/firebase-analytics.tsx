'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { getFirebaseAnalytics } from '@/lib/firebase'
import { logEvent } from 'firebase/analytics'

export function FirebaseAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    getFirebaseAnalytics().then((analytics) => {
      if (analytics && pathname) {
        logEvent(analytics, 'page_view', {
          page_path: pathname,
          page_title: typeof document !== 'undefined' ? document.title : pathname,
        })
      }
    })
  }, [pathname])

  return null
}
