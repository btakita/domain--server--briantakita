import { blog__ctx__new } from '@btakita/domain--all--blog'
import { globalThis__prop__ensure } from 'ctx-core/object'
import { relement__use } from 'relementjs'
import { browser__fragment__relement } from 'relementjs/browser'
export const browser__ctx__ensure = globalThis__prop__ensure(
	'browser__ctx__ensure',
	()=>()=>globalThis__prop__ensure(
		'browser__ctx', ()=>{
			const ctx = browser__ctx__new()
			relement__use(browser__fragment__relement)
			return ctx
		}))
function browser__ctx__new() {
	return blog__ctx__new()
}
