export const ROUTES = {
    HOME: "/",
    ABOUT: "about-me",
    CONTACT: "contact-me",
    PROJECTS: "projects",
    SKILLS: "skills"
}
export const NAMES = {
    GITHUB: "@karthikvdev",
    USER_NAME: "karthik_balaji",
    EMAIL: "karthikbalaji.dev@gmail.com",
    MOBILE: "9941145566"
}
export const URLS = {
    GITHUB: "https://github.com/karthikvdev",
    LINKEDIN: "",
    FACEBOOK: "https://www.facebook.com/karthik.buttoski.007",
    TWITTER: "https://twitter.com/karthikBalaji26",
    INSTAGRAM: "https://www.instagram.com/karthikbalaji_26/",
    MOBILE: `tel:${NAMES?.MOBILE}`,
    EMAIL: `mailto:${NAMES?.EMAIL}`
}
export const THEME = {
    LIGHT: "LIGHT",
    DARK: "DARK"
}

export const scrollToTop = () => {
    const ele = document?.getElementById?.("body-container")
    ele?.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}