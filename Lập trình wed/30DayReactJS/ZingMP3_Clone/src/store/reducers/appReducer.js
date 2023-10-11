import actionTyper from "../acction/actionType";
// Khởi tạo initState giúp cho state không xuất hiện undefined
const initState = {
  banner: [],
};
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTyper.GET_HOME:
      console.log(
        action.homeData?.find((item) => item.sectionType === "banner")
      );
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionType === "banner")
            ?.items || null,
      };

    default:
      return state;
  }
};

export default appReducer;
