import { connect } from "react-redux";
import MainPage from "../pages/MainPage";

const mapStateToProps = state => ({
  sidebarData: state.data,
  pageData: state.page
});

// const mapDispatchToProps = dispatch => ({
//   setPageData: data => dispatch(setPageData(data))
// });

export default connect(
  mapStateToProps,
  null
)(MainPage);
