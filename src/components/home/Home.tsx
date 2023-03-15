import React from "react";
import Navbar from "../navbar/Navbar";
import Card from "../card/Card";
import {
  Container,
  ContentBlog,
  ContentBlogTitle,
  ContentBlogPosts,
} from "./style";

function Home() {
  return (
    <Container>
      <Navbar />

      {/* corpo do blog */}
      <ContentBlog>
        <ContentBlogTitle>Blog</ContentBlogTitle>
        <ContentBlogPosts>
          <Card />
        </ContentBlogPosts>
      </ContentBlog>

      {/* contacts */}
      <div>
        <p>Twitter</p>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
    </Container>
  );
}

export default Home;
