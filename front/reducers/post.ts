export type initialStatePostTypes = {
    mainPosts: [{
        id: number;
        User: {
            id: number;
            nickname: string;
        }
        content: string;
        img: string;
        Comments: any;
    }],
    imagePaths: any;
    addPostErrorReason: string;
    isAddingPost: boolean;
    postAdded: boolean;
    isAddingComment: boolean;
    addCommentErrorReason: string;
    commentAdded: boolean;
};

export const initialState: initialStatePostTypes = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '양동훈',
        },
        content: '첫 번째 게시글',
        img: 'https://opgg-static.akamaized.net/icon/reverse.rectangle.png',
        Comments: [],
    }],    
    imagePaths: [],     
    addPostErrorReason: '',      
    isAddingPost: false,       
    postAdded: false,       
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
};

type dummyPostTypes = {
    id: number;
    User: {
        id: number;
        nickname: string;
    },
    content: string;
    Comments: any;
};

export const dummyPost: dummyPostTypes = {
    id: 2,
    User: {
        id: 1,
        nickname: '양동훈',
    },
    content: '더미 유저입니다.',
    Comments: [],
};

type dummyCommentTypes = {
    id: number;
    User: {
        id: number;
        nickname: string;
    },
    createdAt: Date;
    content: string;
};

export const dummyComment: dummyCommentTypes = {
    id: 1,
    User: {
        id: 1,
        nickname: '양동훈',
    },
    createdAt: new Date(),
    content: '더미 댓글입니다.',
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE'; 

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

type Action = {
    action: any;
    type: string;
    error: string;
    data: any;
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            };
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            };
        }
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); 
            const post = state.mainPosts[postIndex];                
            const Comments = [...post.Comments, dummyComment];      
            const mainPosts = [...state.mainPosts];                 
            mainPosts[postIndex] = { ...post, Comments }
            return {
                ...state,
                isAddingComment: false,
                mainPosts,
                commentAdded: true,
            };
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};