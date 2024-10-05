import { IPost } from '@/components/posts/interfaces/post';
import axios, { AxiosInstance } from 'axios';

class PostService {
  private api: AxiosInstance;

  constructor(baseURL: string = 'https://jsonplaceholder.typicode.com') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

 
  async getPost(id: number): Promise<IPost> {
    try {
      const response = await this.api.get<IPost>(`/posts/${id}`);
      return response.data; 
    } catch (error) {
      throw new Error(`Error fetching post with ID ${id}: ${error}`);
    }
  }

  
  async getAllPosts(): Promise<IPost[]> {
    try {
      const response = await this.api.get<IPost[]>('/posts');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching posts: ${error}`);
    }
  }

  async createPost(post: IPost): Promise<IPost> {
    try {
      const response = await this.api.post<IPost>('/posts', post);
      return response.data;
    } catch (error) {
      throw new Error(`Error creating post: ${error}`);
    }
  }

  async updatePost(post: IPost): Promise<IPost> {
    try {
      const response = await this.api.put<IPost>(`/posts/${post.id}`, post);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating post with ID ${post.id}: ${error}`);
    }
  }

  async patchPost(id: number, title?: string, body?: string): Promise<IPost> {
    try {
      const data: { [key: string]: string | number | undefined } = {};
      if (title) data.title = title;
      if (body) data.body = body;

      const response = await this.api.patch<IPost>(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error patching post with ID ${id}: ${error}`);
    }
  }

  async deletePost(id: number): Promise<void> {
    try {
      await this.api.delete(`/posts/${id}`);
    } catch (error) {
      throw new Error(`Error deleting post with ID ${id}: ${error}`);
    }
  }

  async filterPostsByUserId(userId: number): Promise<IPost[]> {
    try {
      const response = await this.api.get<IPost[]>(`/posts`, {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching posts for user ID ${userId}: ${error}`);
    }
  }

  async getPostComments(postId: number): Promise<any[]> {
    try {
      const response = await this.api.get<any[]>(`/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching comments for post ID ${postId}: ${error}`);
    }
  }
}


export default new PostService()