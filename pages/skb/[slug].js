import {
  fetchLessons,
  getLessonBySlug,
} from 'lib/fetch-lessons'


export default function Skb({ lesson }) {
    // console.log(lesson)
    return <></>
}

export async function getStaticProps({ params }) {
    const data = await getLessonBySlug(params.slug)
    return {
        props: {
            lesson: data,
        }
    }
}

export async function getStaticPaths() {
    const allLessons = await fetchLessons()


    return {
        paths: allLessons
            .map(({ slug }) => {
                return { params: { slug } }
            }),
        fallback: false,
    }
}