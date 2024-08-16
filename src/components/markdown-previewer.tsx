import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

export default function MarkdownPreviewer({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className='prose prose-headings:m-0 prose-headings:mb-4 text-foreground'
    >
      {content}
    </Markdown>
  );
}
