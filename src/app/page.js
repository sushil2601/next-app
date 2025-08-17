import Link from 'next/link'

const Hello = () =>{
    return (
        <>
            <h1>Hello world</h1>
            <Link href="/blog" replace>Blog</Link>
            <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
            <Link href='/articles/breaking-news-123?lang=fr'>Read in French</Link>
        </>
    )
}

export default Hello;