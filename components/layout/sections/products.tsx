'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from 'lucide-react'

import BlurFade from '@/components/magicui/blur-fade'
import { Badge } from '@/components/ui/badge'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { Separator } from '@/components/ui/separator'
import { GradientText } from '@/components/shared/gradient-text'

import { getOrgRepos } from '@/lib/octokit'
import { RepositoryProps } from '@/lib/definitions'

import { DATA } from '@/data'

const BLUR_FADE_DELAY = 0.02

export const ProductsSection = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [repos, setRepos] = useState<RepositoryProps[]>([])

  useEffect(() => {
    getOrgRepos()
      .then(({ data }) => setRepos(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="products" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Products
          </h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Our <GradientText>Latest</GradientText> Projects
          </h2>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            {`Check out some of our recent work and see how we can help bring your ideas to life.`}
          </h3>
        </BlurFade>
      </div>

      {loading ? (
        <>
          {Array.from({ length: 2 }).map((_, idx) => (
            <BlurFade key={idx} delay={(BLUR_FADE_DELAY + idx) * 0.1}>
              <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pt-44">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-8 w-3/4 rounded-md bg-muted animate-pulse" />
                    <div className="h-6 w-1/2 rounded-md bg-muted animate-pulse" />
                  </div>
                  <div className="h-10 w-32 rounded-md bg-muted animate-pulse" />
                </div>
                <div className="h-[400px] w-full rounded-xl bg-muted animate-pulse" />
              </div>
            </BlurFade>
          ))}
        </>
      ) : (
        <>
          {repos.map((repo, idx) => (
            <div
              key={repo.id}
              className="grid lg:grid-cols-2 place-items-center lg:gap-24 lg:pt-44"
            >
              <div>
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {DATA.products[repo.name as keyof typeof DATA.products]}
                  </h2>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 6}>
                  <p className="text-xl text-muted-foreground mb-8">
                    {repo.description}
                  </p>
                </BlurFade>

                <Separator className="my-6" />

                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <div className="gap-4">
                    {repo.topics.map((topic, idx) => (
                      <Badge key={idx} className="mx-1 my-1">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </BlurFade>

                <Separator className="my-6" />

                <BlurFade delay={BLUR_FADE_DELAY * 12}>
                  <div className="mt-4">
                    <Link href={repo.html_url}>
                      <Badge className="mx-1 my-1 gap-2">
                        <GithubIcon size={18} /> Source
                      </Badge>
                    </Link>
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={(BLUR_FADE_DELAY + idx) * 0.1}>
                <NeonGradientCard
                  neonColors={{
                    firstColor: DATA.color.gradient.from,
                    secondColor: DATA.color.gradient.to,
                  }}
                  className="lg:rotate-3 my-12"
                >
                  <Image
                    width={1000}
                    height={500}
                    src={DATA.images[repo.name as keyof typeof DATA.images]}
                    alt={repo.name}
                    style={{
                      borderRadius: 20,
                    }}
                    priority={true}
                  ></Image>
                </NeonGradientCard>
              </BlurFade>
            </div>
          ))}
        </>
      )}
    </section>
  )
}
