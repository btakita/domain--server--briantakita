import { import_meta_env_ } from 'ctx-core/env'
export function briantakita_server_env_() {
	const env = import_meta_env_()
	if (!env.ASSETS_BRIANTAKITA_ME__BUCKET_URL) throw Error('ASSETS_BRIANTAKITA_ME__BUCKET_URL|missing')
	return env as domain_server_briantakita_env_T
}
export type domain_server_briantakita_env_T = {
	ASSETS_BRIANTAKITA_ME__BUCKET_URL:string
}
