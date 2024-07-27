import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

export default function MarkdownPreviewer({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className='prose prose-headings:m-0 prose-headings:mb-4'
    >
      {content}
    </Markdown>
  );
}
