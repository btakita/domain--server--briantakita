import { blog_ctx__new } from '@rappstack/domain--any--blog/ctx'
import { globalThis__prop__ensure } from 'ctx-core/object'
import { relement__use } from 'relementjs'
import { browser__relement } from 'relementjs/browser'
export const browser_ctx__ensure = globalThis__prop__ensure(
	'browser_ctx__ensure',
	()=>()=>globalThis__prop__ensure(
		'browser_ctx', ()=>{
			const ctx = browser_ctx__new()
			relement__use(browser__relement)
			return ctx
		}))
function browser_ctx__new() {
	return blog_ctx__new()
}
