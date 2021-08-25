import {useCookies} from 'react-cookie'
import {UserObjInterface} from '../interfaces/Interface'


const USER = 'user'

// user hook
export const useUserCookie = () => {

	// using cookies to store token
	const [cookies, setCookie, removeCookie] = useCookies([USER])
	const setUserCookie = (user: UserObjInterface) => setCookie(USER, JSON.stringify(user))
	const removeUserCookie = () => removeCookie(USER)

	return [cookies[USER], setUserCookie, removeUserCookie]
}
