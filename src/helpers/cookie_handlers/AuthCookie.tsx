import { useCookies } from 'react-cookie'
import jwt_decode from 'jwt-decode'

import { TokenPayloadInterface } from '../interfaces/Interface'


const TOKEN = "token"
const REFRESH_TOKEN = "refreshToken"

// token hook
export const useTokenCookie = () => {

	// using cookies to store token
	const [cookies, setCookie, removeCookie] = useCookies([TOKEN])
	const setTokenCookie = (token: string) => {
		
		// decode token to get expiration
		let parsedToken: TokenPayloadInterface = jwt_decode(token)
		let token_exp = new Date(parsedToken.exp * 1000)

		setCookie(
			TOKEN, 
			token, {
				expires: token_exp
			}
		)
	}
	const removeTokenCookie = () => removeCookie(TOKEN)

	return [cookies[TOKEN], setTokenCookie, removeTokenCookie]
}

// to refresh token hook
export const useRefreshTokenCookie = () => {

	// using cookies to store refresh token
	const [cookies, setCookie, removeCookie] = useCookies([REFRESH_TOKEN])
	const setRefreshTokenCookie = (refreshToken: string) => setCookie(REFRESH_TOKEN, refreshToken)
	const removeRefreshTokenCookie = () => removeCookie(REFRESH_TOKEN)

	return [cookies[REFRESH_TOKEN], setRefreshTokenCookie, removeRefreshTokenCookie]
}
