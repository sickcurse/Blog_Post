function getBlogData(){
    return JSON.parse(localStorage.getItem("blog"))
}

function displayBlogData(blogs){
    let parentDiv = document.createElement("div")
    for (let i = 0; i < blogs.length; i++) {
       let blogDiv = document.createElement("div")
       blogDiv.style.border = "1px solid black" 
       blogDiv.style.margin = "5px"

       let usernamePara = document.createElement ("p")
       usernamePara.innerHTML = "Title" + blogs [i].username

       blogDiv.append(usernamePara)
       parentDiv.append(blogDiv)

        
    }
    document.getElementById("blogData").append(parentDiv)
}

function init(){
    let blogData = getBlogData()
    displayBlogData(blogData)
}

init()
