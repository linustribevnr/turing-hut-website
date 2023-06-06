import React from "react";
import Faqs from "../components/Faqs";
import Layout from "../components/Layout";
import VisionMission from "../components/VisionMission";
import { Seo } from "../components/Seo";
export const Head = () => <Seo routename={"About"} />;
export default function aboutPage() {
  return (
    <Layout>
      <VisionMission />
      <Faqs />
    </Layout>
  );
}
