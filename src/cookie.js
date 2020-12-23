import Cookies from 'js-cookie'
//SET COOKIE

export let setCookie = (data) => {//{token: ...., name: ..}
    Cookies.set('user-info', data, {expires: 1}) //will be expired in 1 day
}

export let getCookie = () => {
    if(Cookies.get('user-info')){
        return JSON.parse(Cookies.get('user-info'))
    }else {
        return {}
    }
}

export let removeCookie = (cookieName) => {
    Cookies.remove(cookieName)
}
