import { useRoute } from 'vue-router';
import { blogBackend } from './main.js';

/**
 * Fetch a single blog-post from the remote host in HTML markup / text format.
 *
 * @function getBlogPost
 * @access {public}
 */
export async function getBlogPost() {
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

/**
 * Fetch all blog-posts from the remote host in JSON format.
 *
 * @function getBlogPost
 * @access {public}
 */
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
