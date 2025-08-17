
function getRandomInt(count){
    return Math.floor(Math.random()*count)
}

const Blog = async() =>{

    const random = getRandomInt();
    if(random === 1){
        throw new Error("Error loading Blog page")
    }

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('Intentionally delay')
    },2000)
    })
    return <h1>Blog page</h1>
}

export default Blog;