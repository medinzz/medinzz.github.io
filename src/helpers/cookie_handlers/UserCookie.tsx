import {useCookies} from 'react-cookie'
import {UserObjInterface} from '../interfaces/Interface'


const USER = 'user'

/**
 * User Hook
 * 
 * This function returns a react hooks that needs to be declared as follows: 
 * const [user, setUserCookie, removeUserCookie] = useUserCookie()
 **/ 
export const useUserCookie = () => {

	// using cookies to store user
	const [cookies, setCookie, removeCookie] = useCookies([USER])
	const setUserCookie = (user: UserObjInterface) => setCookie(USER, user)
	const removeUserCookie = () => removeCookie(USER)
	
	return [cookies[USER], setUserCookie, removeUserCookie]
}
