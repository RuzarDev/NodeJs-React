export const searchBlog = (arr,search)=>arr.filter(item => item.title.toLowerCase().includes(search.query.toLowerCase()))


export const filterBlog = (arr,filter)=>{
    if(filter==="All"){
        return arr
    }else {
        return arr.filter(item=>item.categories.includes(filter))
    }
}

export const searchedAndFilteredBlog = (arr,search,filter)=>{
    const fil = filterBlog(arr,filter)
    return searchBlog(fil,search)

}


