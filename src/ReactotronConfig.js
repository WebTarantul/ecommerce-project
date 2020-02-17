import Reactotron from 'reactotron-react-js';
import { mst } from 'reactotron-mst';

Reactotron.configure({ name: 'React with MST' }) // we can use plugins here -- more on this later
  .use(mst())
  .connect(); // let's connect!
