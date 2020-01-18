import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
const home = lazy(() => import('./component/home/home'));
const department = lazy(()=>import('./component/department/department'));
function App() {
  return (
    <Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/" exact component={home} />
          <Route path="/department" exact component ={department} />
          <Route path="/login" exact component ={department} />
				</Switch>
			</Suspense>
		</Router>
  );
}

export default App;
