import Link from 'next/link'

import { DATA } from '@/data'

const Home = () => {
  return (
    <section className="container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white to-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="max-w-6xl space-y-8 relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Kinotio is a vibrant community of developers building open-source
            projects. We&apos;re dedicated to creating innovative solutions in
            SaaS, CLI tools, and libraries—
            <Link
              href={DATA.social_url.github}
              className="underline hover:text-gray-300"
            >
              Discover Our Projects
            </Link>{' '}
            and{' '}
            <Link
              href={DATA.social_url.discord}
              className="underline hover:text-gray-300"
            >
              Join Our Community
            </Link>
            .
          </h1>
          <p className="text-xl text-white md:text-2xl">
            Our open-source initiatives empower developers worldwide to
            collaborate and innovate, pushing the boundaries of technology.
          </p>
        </div>
        <div>
          <p className="text-white">
            If you&apos;re passionate about open-source development, you should{' '}
            <Link
              href={DATA.social_url.github}
              className="underline hover:text-gray-300"
            >
              join us and contribute!
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
