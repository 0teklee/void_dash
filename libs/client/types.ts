export interface IPostData {
  id: number;
  title: string;
  content: string;
  createdAt: string | Date;
  category?: string;
  isPrivate?: boolean;
  private: boolean;
  viewCount: number;
}

export interface IPostDetailData extends IPostData {
  createdAt: string;
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

export interface IPostDetailResponse {
  post: IPostDetailData;
}
