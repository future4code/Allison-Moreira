const myBlog = {
    titulo: "meu primeiro titulo",
    autor: "allison marques",
    conteudo: "Este é meu primeiro conteudo em blog."
}

console.log(myBlog)

const imprimirBlogs = document.getElementById("container-de-posts")
console.log(imprimirBlogs)
imprimirBlogs.innerHTML = '<article></article>'