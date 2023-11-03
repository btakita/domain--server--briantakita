import { blog__ctx__new, van__set } from '@btakita/domain--all--blog'
import { globalThis__prop__ensure } from '@ctx-core/object'
import van from 'vanjs-core'
export const browser__ctx__ensure = globalThis__prop__ensure(
	'browser__ctx__ensure',
	()=>()=>globalThis__prop__ensure(
		'browser__ctx', ()=>{
			const ctx = browser__ctx__new()
			van__set(ctx, van)
			return ctx
		}))
function browser__ctx__new() {
	return blog__ctx__new()
}
