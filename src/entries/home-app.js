import React from 'react'
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from '../page/containers/home'
import data from '../api'

render(<Home data={data} />, document.getElementById('app'))