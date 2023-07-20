export interface IPostData {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  category: string;
  isPrivate?: boolean;
  private: boolean;
  viewCount: number;
}

export interface ICommentData {
  id: number;
  content: string;
  nickname: string;
  createdAt: string;
  isPrivate: boolean;
  guest: {
    id: number;
  };
  post: {
    id: number;
  };
}

export interface ICommentDataResponse {
  comments: ICommentData[];
  message: string;
}

export interface IPostDataResponse {
  post: IPostData;
}
