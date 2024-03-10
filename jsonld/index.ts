import type {
	AboutPage,
	ContactPage,
	DefinedTerm,
	ImageObject,
	Occupation,
	Organization,
	Person,
	Thing,
	WebSite
} from '@btakita/schema-dts'
import { ns_id_id_ref_be_jsonld_pair_ } from '@rappstack/domain--server/jsonld'
import { site__author_, site__title_, site__website_ } from '@rappstack/domain--server/site'
import { social_a1_ } from '@rappstack/domain--server/social'
import { import_meta_env_ } from 'ctx-core/env'
import { url__join } from 'ctx-core/uri'
import { nullish__none_, tup, type wide_ctx_T } from 'rebuildjs/server'
import logo_svg from '../public/assets/images/logo.svg'
const ns = import_meta_env_().NODE_ENV === 'production' ? 'app' : ''
export const [
	WebSite_id_ref_
] = ns_id_id_ref_be_jsonld_pair_(ns, 'WebSite', ctx=>{
	return nullish__none_(tup(site__website_(ctx), site__title_(ctx)), (
		site__website, site_title
	)=><WebSite>{
		'@type': 'WebSite',
		'@id': url__join(site__website, '#WebSite'),
		url: site__website,
		name: site_title,
		publisher: Person_id_ref_(ctx),
	})
})
export const [
	Organization_id_ref_
] = ns_id_id_ref_be_jsonld_pair_(ns, 'Organization', ctx=>{
	return nullish__none_(tup(site__website_(ctx), site__title_(ctx)), (
		site__website, site__title
	)=><Organization>{
		'@type': 'Organization',
		'@id': url__join(site__website, '#Organization'),
		url: site__website,
		name: site__title,
		logo: logo_ImageObject_id_ref_(ctx),
		founder: Person_id_ref_(ctx),
	})
})
export const [
	logo_ImageObject_id_ref_,
] = ns_id_id_ref_be_jsonld_pair_(ns, 'logo_ImageObject', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=><ImageObject>{
		'@type': 'ImageObject',
		'@id': url__join(site__website, '#logo'),
		url: url__join(site__website, logo_svg),
		width: '256px',
		height: '256px',
	})
})
export const [
	[AboutPage_id_ref_, AboutPage_],
	AboutPage_id_,
	AboutPage__description_,
] = [
	ns_id_id_ref_be_jsonld_pair_(ns, 'AboutPage', ctx=>{
		return nullish__none_(tup(site__website_(ctx), site__author_(ctx)), (
			site__website, site__author
		)=><AboutPage>{
			'@type': 'AboutPage',
			'@id': url__join(site__website, 'about', '#AboutPage'),
			url: url__join(site__website, 'about'),
			name: 'About | ' + site__author,
			about: Person_id_ref_(ctx),
			description: 'Creates efficient systems that grow with you',
			inLanguage: 'en-us',
			isPartOf: WebSite_id_ref_(ctx)
		})
	}),
	(ctx:wide_ctx_T<typeof ns>)=><string>AboutPage_id_ref_(ctx)['@id'],
	(ctx:wide_ctx_T<typeof ns>)=><string>AboutPage_(ctx).description,
]
export const [
	ContactPage_id_ref_
] = ns_id_id_ref_be_jsonld_pair_(ns, 'ContactPage', ctx=>{
	return nullish__none_(tup(site__website_(ctx), site__author_(ctx)), (
		site__website, site__author
	)=>{
		const jsonld_ContactPage_id = url__join(site__website, '#ContactPage')
		return <ContactPage>{
			'@type': 'ContactPage',
			'@id': jsonld_ContactPage_id,
			url: jsonld_ContactPage_id,
			name: 'Contact ' + site__author,
			inLanguage: 'en-us',
			isPartOf: WebSite_id_ref_(ctx),
			about: Person_id_ref_(ctx),
			mainEntity: Person_id_ref_(ctx)
		}
	})
})
export const [
	Person_id_ref_
] = ns_id_id_ref_be_jsonld_pair_(ns, 'Person', ctx=>{
	return nullish__none_(tup(site__website_(ctx), site__author_(ctx), social_a1_(ctx)), (
		site__website, site__author, social_a1
	)=><Person>{
			'@type': 'Person',
			'@id': url__join(site__website, '#Person'),
			url: site__website,
			name: site__author,
			image: 'https://gravatar.com/avatar/a0599814ceddc2e283792f4e47c57f5e',
			alumniOf: uop_Organization_id_ref_(ctx),
			jobTitle: full_stack_engineer_DefinedTerm_id_ref_(ctx),
			knowsAbout: [
				typescript_Thing_id_ref_(ctx),
				javascript_Thing_id_ref_(ctx),
			],
			hasOccupation: [
				sr_full_stack_engineer_Occupation_id_ref_(ctx),
				digital_marketer_Occupation_id_ref_(ctx),
			],
			sameAs: [
				...social_a1.filter(social=>social.active).map(social=>social.href),
				'https://linktr.ee/briantakita',
				'https://www.youtube.com/channel/UC3gg23rxm1sM43sQWRGKEqQ',
				'https://twitter.com/BrianTakita/',
				'https://www.instagram.com/briantakita/',
				'https://www.facebook.com/brian.takita',
				'https://www.crunchbase.com/person/brian-takita',
				'https://angel.co/brian-takita',
				'https://authory.com/BrianTakita',
				'https://dev.to/btakita',
				'https://www.npmjs.com/~btakita',
				'https://en.wikipedia.org/wiki/User:Btakita',
				'https://www.wikidata.org/wiki/User:Briantakita',
				'https://en.wiktionary.org/wiki/User:Btakita',
				'https://briantakita.tumblr.com/',
				'https://stackoverflow.com/users/142571/brian-takita3',
				'https://security.stackexchange.com/users/294675/brian-takita',
				'https://ossrank.com/c/70584-brian-takita',
				'https://www.slideshare.net/brian_takita',
				'https://www.pinterest.com/briantakita/',
				'https://www.quora.com/profile/Brian-Takita',
				'https://substack.com/@btak',
				'https://www.tiktok.com/@briantakita',
				'https://about.me/brian_takita',
				'https://www.reddit.com/user/briantakita/',
				'https://soundcloud.com/brian-takita',
				'https://www.behance.net/briantakita',
				'https://gravatar.com/btakita',
				'https://disqus.com/by/brian_takita/',
				'https://briantakita.weebly.com/',
				'https://brian-takita.blogspot.com/',
				'https://intellij-support.jetbrains.com/hc/en-us/profiles/1379237172-Brian-Takita',
				'https://medium.com/@briantakita',
				'https://mix.com/briantakita',
				'https://www.meetup.com/Los-Angeles-Gophers/members/109554982',
				'https://foursquare.com/briant9631966',
				'https://www.diigo.com/profile/briantakita',
				'https://www.slideshare.net/BrianTakita',
				'https://deep-cut.fm/profile/65e7579ec4c0c5001eddebb0',
				'https://www.last.fm/user/briantakita',
				'https://huggingface.co/btak/',
				'https://briantakita.wordpress.com/',
				'https://hashnode.com/@btakita',
				'https://www.flickr.com/photos/27218486%40N02',
				'https://community.cloudflare.com/badges/29/hot-link?username=brian.takita',
				'https://stocktwits.com/briantakita',
				'https://briantakita.brandyourself.com/',
			],
		})
})
export const [
	typescript_Thing_id_ref_,
] = ns_id_id_ref_be_jsonld_pair_(ns, 'typescript_Thing', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=><Thing>{
		'@id': url__join(site__website, '#typescript_Thing'),
		'@type': 'Thing',
		'name': 'Typescript',
		alternateName: 'ts',
		sameAs: 'https://www.typescriptlang.org/'
	})
})
export const [
	javascript_Thing_id_ref_,
] = ns_id_id_ref_be_jsonld_pair_(ns, 'javascript_Thing', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=><Thing>{
		'@id': url__join(site__website, '#javascript_Thing'),
		'@type': 'Thing',
		'name': 'Javascript',
		alternateName: 'js',
		sameAs: 'https://developer.mozilla.org/en-US/docs/Web/javascript/'
	})
})
export const [
	sr_full_stack_engineer_Occupation_id_ref_
] = ns_id_id_ref_be_jsonld_pair_(ns, 'sr_full_stack_engineer_Occupation', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=>{
		const full_stack_engineer_description = 'Develops many interoperable apps + open source libraries that are simple & small in size. Creates flat architectures that scale large & small. These libraries & apps build on each other. Reactive programming with general purpose contexts. Precise & scalable domain ontology. These techniques remove incidental complexity & bloat that come with other programming paradigms.'
		return <Occupation>{
			'@id': url__join(site__website, '#sr_full_stack_engineer_Occupation'),
			'@type': 'Occupation',
			name: 'Sr. Full Stack Engineer',
			description: full_stack_engineer_description,
			qualifications: full_stack_engineer_description,
		}
	})
})
export const [
	digital_marketer_Occupation_id_ref_
] = ns_id_id_ref_be_jsonld_pair_(ns, 'digital_marketer_Occupation', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=>{
		const digital_marketer_description = 'Performs full-featured Digital Marketing Services. Excels at creating engaging websites/apps, technical SEO, & automating systems.'
		return <Occupation>{
			'@id': url__join(site__website, '#digital_marketer_Occupation'),
			'@type': 'Occupation',
			name: 'Digital Marketer',
			description: digital_marketer_description,
			qualifications: digital_marketer_description,
		}
	})
})
export const [
	uop_Organization_id_ref_,
] = ns_id_id_ref_be_jsonld_pair_(ns, 'uop_Organization', ()=>{
	return <Organization>{
		'@id': 'https://www.wikidata.org/wiki/Q630226',
		'@type': 'Organization',
		name: 'University of the Pacific',
	}
})
export const [
	full_stack_engineer_DefinedTerm_id_ref_,
] = ns_id_id_ref_be_jsonld_pair_(ns, 'full_stack_engineer_DefinedTerm', ctx=>{
	return nullish__none_(tup(site__website_(ctx)), (
		site__website
	)=><DefinedTerm>{
		'@id': url__join(site__website, '#full_stack_engineer_DefinedTerm'),
		'@type': 'DefinedTerm',
		'name': 'Full Stack Engineer',
		'alternateName': 'Full Stack Web Developer',
		'sameAs': 'https://www.coursera.org/articles/full-stack-engineer'
	})
})
