import Link from 'next/link'
import { Github } from 'lucide-react'

import { Kinotio } from '@/components/icons'
import { Discord } from '@/components/icons'

import { DATA } from '@/data'

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Kinotio width={150} height={100} />
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            href={DATA.social_url.discord}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Discord className="h-6 w-6" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href={DATA.social_url.github}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
