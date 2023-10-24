import { faker } from '@faker-js/faker';
import { PostProps } from "../components/post/Post.tsx";


function createRandomContent() {
    return {
        type: 'paragraph',
        content: faker.lorem.paragraph()
    }
}

function createRandomPost(): PostProps {
    return {
        id: faker.string.uuid(),
        author: {
            name: faker.person.fullName(),
            avatarUrl: faker.image.avatar(),
            role: faker.person.jobTitle()
        },
        content: faker.helpers.multiple(createRandomContent, {
            count: Math.floor(Math.random() * 5),
        }),
        publishedAt: faker.date.anytime(),
    }
}

export const POSTS: PostProps[] = faker.helpers.multiple(createRandomPost, {
    count: Math.floor(Math.random() * 10),
});