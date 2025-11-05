import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPostBySlug } from '../lib/getPosts';

const BlogPost = () => {
  // ensure slug is typed as string | undefined
  const { slug } = useParams<{ slug?: string }>();

  // Normalize possible ESM/CJS shapes for rehype plugins (some runtime builds expose .default)
  const slugPlugin = (rehypeSlug as any)?.default ?? rehypeSlug;
  const autolinkPlugin = (rehypeAutolinkHeadings as any)?.default ?? rehypeAutolinkHeadings;

  const post = typeof slug === 'string' ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <section className="section-padding bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto container-padding">
          <h1 className="text-2xl font-[Syne] font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary-500 hover:underline">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const { meta, content } = post;

  return (
    <article className="section-padding bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto container-padding">
        <h1 className="text-3xl md:text-4xl font-[Syne] font-bold mb-2">{meta.title}</h1>
        <p className="text-gray-400 text-sm mb-8">
          {new Date(meta.date).toLocaleDateString()} {meta.readTime ? `• ${meta.readTime}` : ''} {meta.category ? `• ${meta.category}` : ''}
        </p>

        <div className="prose prose-invert max-w-none prose-headings:font-[Syne]"></div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[slugPlugin, [autolinkPlugin, { behavior: 'append' }]]}
        >
          {content}
        </ReactMarkdown>

        <div className="mt-10">
          <Link to="/blog" className="text-primary-500 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;