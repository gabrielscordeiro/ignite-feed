export const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/gabrielscordeiro.png',
            name: 'Gabriel Schmidt Cordeiro',
            role: 'Front-end Coordinator'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: ' #novoprojeto' },
        ],
        publishedAt: new Date('2023-10-23 22:16:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @ Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: ' #novoprojeto' },
        ],
        publishedAt: new Date('2023-10-23 22:16:00')
    },
]