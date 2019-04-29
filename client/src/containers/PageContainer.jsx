import { connect } from "react-redux";
import Page from "../components/Page/Page";

const mapStateToProps = state => ({
  data: state.page,
});

// const mapDispatchToProps = dispatch => ({
//   setPageData: data => dispatch(setPageData(data))
// });

export default connect(
  mapStateToProps,
  null
)(Page);
