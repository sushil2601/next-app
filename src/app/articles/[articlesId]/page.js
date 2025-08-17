"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { use } from "react"
const NewsArticle = ({params,searchParams}) =>{

    const {articlesId} = use(params);

    const {lang = "en"} = use(searchParams);

    return(
        <div>
            <h1>News article {articlesId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
                <Link href={`/articles/${articlesId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}

export default NewsArticle;