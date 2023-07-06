declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"demo-three.md": {
  id: "demo-three.md",
  slug: "demo-three",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"demo-two.md": {
  id: "demo-two.md",
  slug: "demo-two",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
"demo.md": {
  id: "demo.md",
  slug: "demo",
  body: string,
  collection: "blog",
  data: any
} & { render(): Render[".md"] },
},
"sections": {
"Benefits.md": {
  id: "Benefits.md",
  slug: "benefits",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
"Faq.md": {
  id: "Faq.md",
  slug: "faq",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
"Features.md": {
  id: "Features.md",
  slug: "features",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
"Hero.md": {
  id: "Hero.md",
  slug: "hero",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
"HowItWorks.md": {
  id: "HowItWorks.md",
  slug: "howitworks",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
"Pricing.md": {
  id: "Pricing.md",
  slug: "pricing",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
"RequestDemo.md": {
  id: "RequestDemo.md",
  slug: "requestdemo",
  body: string,
  collection: "sections",
  data: any
} & { render(): Render[".md"] },
},
"site": {
"Privacy.md": {
  id: "Privacy.md",
  slug: "privacy",
  body: string,
  collection: "site",
  data: any
} & { render(): Render[".md"] },
"Settings.md": {
  id: "Settings.md",
  slug: "settings",
  body: string,
  collection: "site",
  data: any
} & { render(): Render[".md"] },
"Terms.md": {
  id: "Terms.md",
  slug: "terms",
  body: string,
  collection: "site",
  data: any
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = never;
}
