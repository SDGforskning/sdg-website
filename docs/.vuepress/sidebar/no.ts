import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarNO: SidebarConfig = {
  '/': [
    'baerekraftsmaalene.md',
    'definisjon.md',
    {
      text: 'Bærekraftsmål',
      children: [
        '/baerekraftsmal/README.md',
      ],
    },
    '/om.md',
  ]
}
