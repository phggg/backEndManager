import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IRouter from './Router'
import * as serviceWorker from './serviceWorker';
import './style/common.less'
import './mock/table1'
import './mock/table2'

ReactDOM.render(<IRouter />, document.getElementById('root'));

serviceWorker.unregister();
