async function cookieValidator ( cookies) {
    try{
        await externalllyValidateCookie(cookies.testCookies)
    }
    catch{
        throw new Error('Invalid Cookies')
    }
}