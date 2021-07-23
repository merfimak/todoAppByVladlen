import {SHOW_ALERT} from '../tipes'
import {HIDE_ALERT} from '../tipes'

const handlers = {
	[SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),//добовляем новые данные для алерта и показываем
	[HIDE_ALERT]: state => ({...state, visible: false}),// скрываем алерт
	DEFAULT: state => state
}


export const alertReducer = (state, action) => {
	//console.log(action)
	const handle = handlers[action.type] || handlers.DEFAULT
	return handle(state, action)
}