import { blog__ctx__new } from '@btakita/domain--all--blog'
import { globalThis__prop__ensure } from '@ctx-core/object'
import { props_clean_van__new, van__set } from '@ctx-core/vanjs'
import van from 'vanjs-core'
export const browser__ctx__ensure = globalThis__prop__ensure(
	'browser__ctx__ensure',
	()=>()=>globalThis__prop__ensure(
		'browser__ctx', ()=>{
			const ctx = browser__ctx__new()
			van__set(ctx, props_clean_van__new(van))
			return ctx
		}))
function browser__ctx__new() {
	return blog__ctx__new()
}
