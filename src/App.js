import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/layouts/Navigation';
import UIButton from './components/UIButton';
import UISlider from './components/UISlider';
import UICheckbox from './components/UICheckbox';
import UISelect from './components/UISelect';
import UIText from './components/UIText';
import UISwitch from './components/UISwitch';
import UIBox from './components/UIBox';
import UIGrid from './components/UIGrid';
import UITab from './components/UITab';
import UITable from './components/UITable';
import UICard from './components/UICard';
import UIApiData from './components/UIApiData';

function App() {
  return (
          <>
		  	<Router>
			  	<Navbar />
			  	<Switch>
				  	<Route exact path="/ui-button" component={UIButton} />
				  	<Route exact path="/ui-slider" component={UISlider} />
				  	<Route exact path="/ui-checkbox" component={UICheckbox} />
				  	<Route exact path="/ui-select" component={UISelect} />
				  	<Route exact path="/ui-text" component={UIText} />
				  	<Route exact path="/ui-switch" component={UISwitch} />
				  	<Route exact path="/ui-box" component={UIBox} />
				  	<Route exact path="/ui-grid" component={UIGrid} />
				  	<Route exact path="/ui-tab" component={UITab} />
				  	<Route exact path="/ui-table" component={UITable} />
				  	<Route exact path="/ui-card" component={UICard} />
				  	<Route exact path="/api-data" component={UIApiData} />
				</Switch>
			</Router>
          </>
  );
}

export default App;
