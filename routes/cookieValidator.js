async function cookieValidator ( cookies) {
    try{
        await externallyValidateCookie(cookies.testCookies)
    }
    catch{
        throw new Error('Invalid Cookies')
    }
}