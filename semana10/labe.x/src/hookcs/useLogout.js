

function UseLogoutPages(history) {

    const token = localStorage.getItem("token")
    localStorage.clear(token)
    history.push("/login")
   
}

export default UseLogoutPages