import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { setPageData, togglePageDisplay, setInitial } from "../actions/pageActions";

const mapStateToProps = state => ({
  data: state.data.categories,
});

const mapDispatchToProps = dispatch => ({
  setPageData: data => dispatch(setPageData(data)),
  togglePageDisplay: () => dispatch(togglePageDisplay()),
  setInitial: () => dispatch(setInitial())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
