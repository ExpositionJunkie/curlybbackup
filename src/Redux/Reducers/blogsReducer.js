import * as ActionTypes from "../ActionCreators/ActionTypes";

export const Blogs = (
  state = {
    isLoading: true,
    errMess: null,
    blogs: [],
    devblogs: [],
    blog: {},
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BLOGS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blogs: action.payload,
        devblogs: action.payload.filter((blog) => {
          let tags = blog.tags.map((tag) => tag.toLowerCase());
          tags = tags.filter((tag) => tag.includes("devblog"));
          return blog.author.username === "Zenith" && tags.length !== 0;
        }),
      };
    case ActionTypes.ADD_BLOG:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        blog: action.payload,
      };
    case ActionTypes.BLOGS_LOADING:
      return { ...state, isLoading: true, errMess: null, blogs: [] };

    case ActionTypes.BLOGS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
