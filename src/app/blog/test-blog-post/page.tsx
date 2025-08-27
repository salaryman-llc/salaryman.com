import BlogAuthor from '~/app/_components/blog/blogAuthor';
import BlogBody from '~/app/_components/blog/blogBody';
import BlogCodeBlock from '~/app/_components/blog/blogCodeBlock';
import BlogImage from '~/app/_components/blog/blogImage';
import BlogParagraph from '~/app/_components/blog/blogParagraph';
import BlogTitle from '~/app/_components/blog/blogTitle';

const code = `void TestFunction() {
  return;
}`;

export default function TestBlogPost() {
  return (
    <BlogBody>
      <BlogTitle>Test Blog Post</BlogTitle>
      <BlogParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero
        dui, posuere nec nibh non, efficitur tempor nisl. Curabitur convallis
        mollis fringilla. In eget tortor eu lacus congue aliquet sed ut orci.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
        commodo eu lectus id gravida. Curabitur vitae posuere velit. Ut eget
        justo dui. Mauris efficitur eros pellentesque massa tempus, non
        tincidunt mauris tincidunt. Quisque pretium luctus auctor. Quisque
        hendrerit eu turpis ac auctor. Phasellus ac mi quis elit consectetur
        porttitor. Fusce vulputate hendrerit dictum. Cras efficitur diam luctus,
        pharetra felis nec, laoreet orci. Nullam lacinia, neque nec vulputate
        viverra, tortor augue viverra libero, nec bibendum eros nunc quis
        sapien. Praesent eget diam at ex imperdiet semper id vel ante. Nunc in
        consequat nulla.
      </BlogParagraph>
      <BlogImage
        height={200}
        width={200}
        src="https://avatars.githubusercontent.com/u/4359026?s=200&v=4"
        alt="Test Image"
      >
        Image Text
      </BlogImage>
      <BlogImage
        height={200}
        width={200}
        src="https://avatars.githubusercontent.com/u/4359026?s=200&v=4"
        alt="Test Image"
        round
      />
      <BlogCodeBlock language="cpp">{code}</BlogCodeBlock>
      <BlogAuthor
        name="Robert Kennedy"
        title="Founder / CEO"
        imageSrc="https://avatars.githubusercontent.com/u/4359026?s=100&v=4"
      />
    </BlogBody>
  );
}
