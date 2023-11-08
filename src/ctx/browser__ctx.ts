import { blog__ctx__new } from '@btakita/domain--all--blog'
import { globalThis__prop__ensure } from '@ctx-core/object'
import { van__set, vanx__set } from '@ctx-core/vanjs'
import * as vanx from 'vanjs-ext'
import van from 'vanjs-core'
export const browser__ctx__ensure = globalThis__prop__ensure(
	'browser__ctx__ensure',
	()=>()=>globalThis__prop__ensure(
		'browser__ctx', ()=>{
			const ctx = browser__ctx__new()
			van__set(ctx, van)
			vanx__set(ctx, vanx)
			return ctx
		}))
function browser__ctx__new() {
	return blog__ctx__new()
}
