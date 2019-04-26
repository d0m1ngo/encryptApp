import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App/App';

const mapStateToProps = () => ({
});

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(App),
);
