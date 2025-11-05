import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPostBySlug } from '../lib/getPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <section className="section-padding bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto container-padding">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary-500 hover:underline">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const { meta, content } = post;

  return (
    <article className="section-padding bg-gray-900 text-white font-sans">
      <div className="max-w-3xl mx-auto container-padding">
        {/* Page title (outside markdown) */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {meta.title}
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          {new Date(meta.date).toLocaleDateString()}
          {meta.readTime ? ` • ${meta.readTime}` : ''}
          {meta.category ? ` • ${meta.category}` : ''}
        </p>

        {/* Markdown content with Tailwind Typography */}
        <div
          className="
            prose prose-invert max-w-none
            prose-headings:font-semibold
            prose-h1:text-3xl md:prose-h1:text-4xl
            prose-h2:text-2xl md:prose-h2:text-3xl
            prose-h3:text-xl md:prose-h3:text-2xl
            prose-a:text-primary-500 hover:prose-a:text-primary-400
            prose-p:leading-relaxed
            prose-li:my-1
            prose-img:rounded-xl
            prose-pre:bg-gray-800
            prose-hr:border-gray-700
            prose-blockquote:border-gray-700
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]]}
            skipHtml
          >
            {content}
          </ReactMarkdown>
        </div>

        <div className="mt-10">
          <Link to="/blog" className="text-primary-500 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;