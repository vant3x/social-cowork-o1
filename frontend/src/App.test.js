import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
=======
import { shallow } from 'enzyme/build';

>>>>>>> bd2800de18208768076c362bf3ff8cebfa3f3f8b

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
<<<<<<< HEAD
=======


it('mounts without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount()
});
>>>>>>> bd2800de18208768076c362bf3ff8cebfa3f3f8b
