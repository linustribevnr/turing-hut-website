import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import EventPage from "../../components/EventPage";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <EventPage
        html={data.markdownRemark.html}
        event_details={data.markdownRemark.frontmatter}
      />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        slug
        title
        type
      }
    }
  }
`;
export default BlogPost;
