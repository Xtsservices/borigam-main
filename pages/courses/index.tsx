import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const CoursesPage = () => {
  return (
    <Layout>
      <h1>Our Courses</h1>
      <ul>
        <li>
          <Link href="/courses/web-development">Web Development</Link>
        </li>
        <li>
          <Link href="/courses/data-science">Data Science</Link>
        </li>
        <li>
          <Link href="/courses/design">Design</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default CoursesPage;