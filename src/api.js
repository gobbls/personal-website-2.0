import { useRoute } from 'vue-router';
import { blogBackend } from './main.js';

export async function getBlogPost() {
  // Using 'route' to get the post that were requested in the URL field.
  const route = useRoute();
  const blogPostUrl = blogBackend.paths.posts + route.params.post;

  try {
    const response = await fetch(blogPostUrl);
    if (!response.ok) {
      return "Failed to fetch post, blog server might be down.";
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("Error:", error);
    return;
  }
}

export async function getAllBlogPosts() {
  try {
    const response = await fetch(blogBackend.endpoints.allPosts);
    if (!response.ok) {
      return "Failed to fetch posts, the blog server might be down.";
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
    return;
  }
}
