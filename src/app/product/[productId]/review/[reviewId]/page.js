import {notFound} from 'next/navigation'

const Review = async({params}) =>{

    const {reviewId,productId} = await params;

    if(parseInt(reviewId)>1000){
        notFound();
    }

    return <h1>Review {reviewId} for product {productId}</h1>
}

export default Review;