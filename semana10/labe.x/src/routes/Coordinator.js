import UseLogoutPages from '../hookcs/useLogout'

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToFaqPage = (history) => {
    history.push("/duvidas-frequentes")
}

export const goToRegisterUser = (history) => {
    history.push("/cadastro")
}

export const goToResgisterTravels = (history) => {
    history.push("/inscreva-se")
}

export const goToTravelPage = (history) => {
    history.push("/viagens")
}

export const goToTravelDetailPage = (history, id) => {
    // localStorage.setItem("token", id)
    history.push(`/viagens/id/${id}`)
    
}

export const goToLoginUserPage = (history) => {
    history.push("/Login")
}

export const goToAdminHomePage = (history) => {
    history.push("/Admin/")
}

export const goToAdminCreateTrip = (history) => {
    history.push("/Admin/CreateTrip")
}

export const goToLogout = (history) => {
    UseLogoutPages(history)
    history.push('/login')
}