import React from "react";
import Team from "../components/Team";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
export const Head = () => <Seo routename={"Team"} />;
export default function teamPage({ data }) {
  return (
    <Layout>
      <Team />
    </Layout>
  );
}
