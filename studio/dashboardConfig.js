export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cde0111f313f905d8d223b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zbvxwsn7',
                  apiId: '880e43be-a692-4c79-95b7-773023cb4630'
                },
                {
                  buildHookId: '5cde0111fc525f0183abebea',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-snami8jh',
                  apiId: '0f7e3680-616e-41a7-90d7-6b098a8f3a47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/i8ramin/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-snami8jh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
