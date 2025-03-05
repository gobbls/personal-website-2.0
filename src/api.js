import { blogBackend } from '@/main.js';
import { useRoute } from 'vue-router';

export const blogPost = async () => {

  const route = useRoute();
  const blogPostUrl = blogBackend.paths.posts + route.params.post;
  const blogPostFetchErrorMsg = "Failed to fetch post, blog server might be down.";

  try {
    const response = await fetch(blogPostUrl);
    if (!response.ok) {
      return blogPostFetchErrorMsg;
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("Error:", error);
    return;
  }
};

export const blogPosts = async () => {

  const blogPostsEndpoint = blogBackend.endpoints.allPosts;
  const blogPostsFetchErrorMsg = "Failed to fetch posts, the blog server might be down.";

  try {
    const response = await fetch(blogPostsEndpoint);
    if (!response.ok) {
      return blogPostsFetchErrorMsg;
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
    return;
  }
};
