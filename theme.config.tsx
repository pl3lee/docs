import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Documentation</span>,
  project: {
    link: 'https://github.com/pl3lee',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: `@ ${new Date().getFullYear()} Billy Lee. All rights reserved.`
  },
}

export default config
