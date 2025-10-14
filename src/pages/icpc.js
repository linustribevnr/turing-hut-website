import React from "react";
import Layout from "../components/Layout";
import ICPC from "../components/ICPC";
import { Seo } from "../components/Seo";

export const Head = () => <Seo routename={"ICPC Legacy"} />;

export default function icpcPage() {
  return (
    <Layout>
      <ICPC />
    </Layout>
  );
}