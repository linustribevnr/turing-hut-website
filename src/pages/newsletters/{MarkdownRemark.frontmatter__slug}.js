import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import EventPage from "../../components/EventPage";
import NewslettersPage from "../../components/NewslettersPage";

const NewsletterPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <NewslettersPage
        html={data.markdownRemark.html}
        newletter_details={data.markdownRemark.frontmatter}
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
        time
        type
        image {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              placeholder: BLURRED
              transformOptions: { fit: COVER }
            )
          }
        }
        registration
        recording
        contestlink
      }
    }
  }
`;
export default NewsletterPost;
