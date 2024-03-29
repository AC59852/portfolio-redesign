// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Blog Post documents */
interface BlogPostDocumentData {
    /**
     * Primary Image field in *Blog Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.primary_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    primary_image: prismicT.ImageField<never>;
    /**
     * Is This is a Featured Post? field in *Blog Post*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: blog_post.post_featured
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    post_featured: prismicT.BooleanField;
    /**
     * Post Title field in *Blog Post*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Blog Post Title
     * - **API ID Path**: blog_post.post_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    post_title: prismicT.TitleField;
    /**
     * Post Preview Text field in *Blog Post*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Blog Post Preview Text
     * - **API ID Path**: blog_post.post_preview_text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    post_preview_text: prismicT.RichTextField;
    /**
     * Post Date field in *Blog Post*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.post_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    post_date: prismicT.DateField;
    /**
     * Slice Zone field in *Blog Post*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_post.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogPostDocumentDataSlicesSlice>;
}
/**
 * Slice for *Blog Post → Slice Zone*
 *
 */
type BlogPostDocumentDataSlicesSlice = BlogSingleImageSlice | BlogTextContentSlice;
/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogPostDocumentData>, "blog_post", Lang>;
/** Content for Work Page documents */
interface WorkPageDocumentData {
    /**
     * Slice Zone field in *Work Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: work_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<WorkPageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Work Page → Slice Zone*
 *
 */
type WorkPageDocumentDataSlicesSlice = WorkProjectSliceSlice;
/**
 * Work Page document from Prismic
 *
 * - **API ID**: `work_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<WorkPageDocumentData>, "work_page", Lang>;
/** Content for Work documents */
interface WorkDocumentData {
    /**
     * title field in *Work*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * subtitle field in *Work*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * big image field in *Work*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: work.big_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    big_image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Work*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: work.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<WorkDocumentDataSlicesSlice>;
}
/**
 * Slice for *Work → Slice Zone*
 *
 */
type WorkDocumentDataSlicesSlice = TechSliceSlice | TextSliceSlice | TriImageSliceSlice | DualImageSliceSlice;
/**
 * Work document from Prismic
 *
 * - **API ID**: `work`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<WorkDocumentData>, "work", Lang>;
export type AllDocumentTypes = BlogPostDocument | WorkPageDocument | WorkDocument;
/**
 * Primary content in BlogSingleImage → Primary
 *
 */
interface BlogSingleImageSliceDefaultPrimary {
    /**
     * Post Image field in *BlogSingleImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_single_image.primary.post_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    post_image: prismicT.ImageField<never>;
}
/**
 * Default variation for BlogSingleImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogSingleImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogSingleImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BlogSingleImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BlogSingleImage*
 *
 */
type BlogSingleImageSliceVariation = BlogSingleImageSliceDefault;
/**
 * BlogSingleImage Shared Slice
 *
 * - **API ID**: `blog_single_image`
 * - **Description**: `BlogSingleImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogSingleImageSlice = prismicT.SharedSlice<"blog_single_image", BlogSingleImageSliceVariation>;
/**
 * Primary content in BlogTextContent → Primary
 *
 */
interface BlogTextContentSliceDefaultPrimary {
    /**
     * Post Content Title field in *BlogTextContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Post Content Title
     * - **API ID Path**: blog_text_content.primary.post_content_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    post_content_title: prismicT.RichTextField;
    /**
     * Post Content Body field in *BlogTextContent → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Post Content Body
     * - **API ID Path**: blog_text_content.primary.post_content_body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    post_content_body: prismicT.RichTextField;
}
/**
 * Default variation for BlogTextContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogTextContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogTextContentSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BlogTextContentSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BlogTextContent*
 *
 */
type BlogTextContentSliceVariation = BlogTextContentSliceDefault;
/**
 * BlogTextContent Shared Slice
 *
 * - **API ID**: `blog_text_content`
 * - **Description**: `BlogTextContent`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogTextContentSlice = prismicT.SharedSlice<"blog_text_content", BlogTextContentSliceVariation>;
/**
 * Primary content in DualImageSlice → Primary
 *
 */
interface DualImageSliceSliceDefaultPrimary {
    /**
     * Dual Image 1 field in *DualImageSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: dual_image_slice.primary.dual_image_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    dual_image_1: prismicT.ImageField<never>;
    /**
     * Dual Image 2 field in *DualImageSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: dual_image_slice.primary.dual_image_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    dual_image_2: prismicT.ImageField<never>;
}
/**
 * Default variation for DualImageSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `DualImageSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DualImageSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<DualImageSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *DualImageSlice*
 *
 */
type DualImageSliceSliceVariation = DualImageSliceSliceDefault;
/**
 * DualImageSlice Shared Slice
 *
 * - **API ID**: `dual_image_slice`
 * - **Description**: `DualImageSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DualImageSliceSlice = prismicT.SharedSlice<"dual_image_slice", DualImageSliceSliceVariation>;
/**
 * Primary content in TechSlice → Primary
 *
 */
interface TechSliceSliceDefaultPrimary {
    /**
     * Heading field in *TechSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: tech_slice.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * Tech Used field in *TechSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: tech_slice.primary.tech_used
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    tech_used: prismicT.RichTextField;
    /**
     * Description field in *TechSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your product
     * - **API ID Path**: tech_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Section Name field in *TechSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: tech_slice.primary.section_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_name: prismicT.KeyTextField;
}
/**
 * Default variation for TechSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TechSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TechSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TechSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TechSlice*
 *
 */
type TechSliceSliceVariation = TechSliceSliceDefault;
/**
 * TechSlice Shared Slice
 *
 * - **API ID**: `tech_slice`
 * - **Description**: `TechSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TechSliceSlice = prismicT.SharedSlice<"tech_slice", TechSliceSliceVariation>;
/**
 * Primary content in TextSlice → Primary
 *
 */
interface TextSliceSliceDefaultPrimary {
    /**
     * Heading field in *TextSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: text_slice.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * content field in *TextSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your product
     * - **API ID Path**: text_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Section Name field in *TextSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_slice.primary.section_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    section_name: prismicT.KeyTextField;
}
/**
 * Default variation for TextSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextSlice*
 *
 */
type TextSliceSliceVariation = TextSliceSliceDefault;
/**
 * TextSlice Shared Slice
 *
 * - **API ID**: `text_slice`
 * - **Description**: `TextSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceSlice = prismicT.SharedSlice<"text_slice", TextSliceSliceVariation>;
/**
 * Primary content in TriImageSlice → Primary
 *
 */
interface TriImageSliceSliceDefaultPrimary {
    /**
     * Small Image 1 field in *TriImageSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tri_image_slice.primary.small_image_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    small_image_1: prismicT.ImageField<never>;
    /**
     * Small Image 2 field in *TriImageSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tri_image_slice.primary.small_image_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    small_image_2: prismicT.ImageField<never>;
    /**
     * Small Image 3 field in *TriImageSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tri_image_slice.primary.small_image_3
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    small_image_3: prismicT.ImageField<never>;
}
/**
 * Default variation for TriImageSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TriImageSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TriImageSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TriImageSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TriImageSlice*
 *
 */
type TriImageSliceSliceVariation = TriImageSliceSliceDefault;
/**
 * TriImageSlice Shared Slice
 *
 * - **API ID**: `tri_image_slice`
 * - **Description**: `TriImageSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TriImageSliceSlice = prismicT.SharedSlice<"tri_image_slice", TriImageSliceSliceVariation>;
/**
 * Primary content in WorkProjectSlice → Primary
 *
 */
interface WorkProjectSliceSliceDefaultPrimary {
    /**
     * Title field in *WorkProjectSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: work_project_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Work Link field in *WorkProjectSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work_project_slice.primary.work_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    work_link: prismicT.KeyTextField;
    /**
     * Work Image field in *WorkProjectSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: work_project_slice.primary.work_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    work_image: prismicT.ImageField<never>;
    /**
     * Work Year field in *WorkProjectSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work_project_slice.primary.work_year
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    work_year: prismicT.KeyTextField;
    /**
     * Work Role field in *WorkProjectSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: work_project_slice.primary.work_role
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    work_role: prismicT.KeyTextField;
}
/**
 * Default variation for WorkProjectSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WorkProjectSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkProjectSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WorkProjectSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *WorkProjectSlice*
 *
 */
type WorkProjectSliceSliceVariation = WorkProjectSliceSliceDefault;
/**
 * WorkProjectSlice Shared Slice
 *
 * - **API ID**: `work_project_slice`
 * - **Description**: `WorkProjectSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WorkProjectSliceSlice = prismicT.SharedSlice<"work_project_slice", WorkProjectSliceSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogPostDocumentData, BlogPostDocumentDataSlicesSlice, BlogPostDocument, WorkPageDocumentData, WorkPageDocumentDataSlicesSlice, WorkPageDocument, WorkDocumentData, WorkDocumentDataSlicesSlice, WorkDocument, AllDocumentTypes, BlogSingleImageSliceDefaultPrimary, BlogSingleImageSliceDefault, BlogSingleImageSliceVariation, BlogSingleImageSlice, BlogTextContentSliceDefaultPrimary, BlogTextContentSliceDefault, BlogTextContentSliceVariation, BlogTextContentSlice, DualImageSliceSliceDefaultPrimary, DualImageSliceSliceDefault, DualImageSliceSliceVariation, DualImageSliceSlice, TechSliceSliceDefaultPrimary, TechSliceSliceDefault, TechSliceSliceVariation, TechSliceSlice, TextSliceSliceDefaultPrimary, TextSliceSliceDefault, TextSliceSliceVariation, TextSliceSlice, TriImageSliceSliceDefaultPrimary, TriImageSliceSliceDefault, TriImageSliceSliceVariation, TriImageSliceSlice, WorkProjectSliceSliceDefaultPrimary, WorkProjectSliceSliceDefault, WorkProjectSliceSliceVariation, WorkProjectSliceSlice };
    }
}
