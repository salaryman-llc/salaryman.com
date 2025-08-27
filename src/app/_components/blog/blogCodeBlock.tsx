import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BlogCodeBlock({
  language,
  children,
}: {
  language: 'cpp';
  children: string | string[];
}) {
  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      showLineNumbers
      wrapLines
      wrapLongLines
    >
      {children}
    </SyntaxHighlighter>
  );
}
