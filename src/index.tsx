import * as React from 'react';
import { render } from 'react-dom';

import { Main } from './components/main/main';

import 'antd/dist/antd.css';
import './index.css';

render(
  <Main />,
  document.getElementById('root')
);
