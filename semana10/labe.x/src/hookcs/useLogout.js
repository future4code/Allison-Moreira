

function UseLogoutPages(history, value) {

    const token = localStorage.getItem("token")
    localStorage.clear(token)
    history.push(value)
   
}

export default UseLogoutPages