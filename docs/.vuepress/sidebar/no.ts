import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarNO: SidebarConfig = {
  '/': [
    {
      text: 'Tema 1',
      children: [
        '/tema1/README.md',
      ],
    },
    {
      text: 'Tema 2',
      children: [
        '/tema2/README.md',
      ],
    },
    'om.md',
  ]
}