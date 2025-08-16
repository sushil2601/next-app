import Link from 'next/link'

const Hello = () =>{
    return (
        <>
            <h1>Hello world</h1>
            <Link href="/blog" replace>Blog</Link>
        </>
    )
}

export default Hello;