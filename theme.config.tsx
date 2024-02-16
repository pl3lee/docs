import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Docs'
    }
  },
  logo: <span>Documentation</span>,
  docsRepositoryBase: 'https://github.com/pl3lee/docs',
  project: {
    link: 'https://github.com/pl3lee',
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{''}
        <a href="https://billylee.me" target="_blank">
          Billy Lee
        </a>
        .
      </span>
    )
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.billylee.me' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title || 'Docs'} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content={frontMatter.description || 'Documentations'}
        />
      </>
    )
  }
}

export default config
