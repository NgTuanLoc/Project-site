import { useEffect, useState } from 'react';

import Homepage from './pages/Homepage';
import { client, urlFor } from './client';

function App() {
	return <Homepage />;
}

export default App;

/* <img src={urlFor(data[0].mainImage)} alt='' />; */
