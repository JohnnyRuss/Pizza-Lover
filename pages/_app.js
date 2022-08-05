import '../styles/global.scss';
import { PageLayout as Layout } from '../components/Layouts';

import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
