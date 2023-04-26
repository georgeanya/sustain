import axios from 'axios';
import Link from 'next/link';
import { GetStaticProps } from 'next';

interface Blog {
  slug: string;
  title: string;
  category: {
    name: string;
  };
}

interface Props {
  blogs: Blog[];
}

const Home = ({ blogs }: Props) => {
  return (
    <div>
      <h1>Blog App</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/${blog.slug}`}>
              <a>
                {blog.title} ({blog.category.name})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://custodia-health-blog.herokuapp.com/api/articles');
  return {
    props: {
      blogs: data,
    },
  };
};

export default Home;