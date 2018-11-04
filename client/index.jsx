// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import { Grommet, Box, Button, Grid, Text } from "grommet";
import { grommet } from "grommet/themes";

const NColumnGrid = () => (
  <Grommet theme={grommet} full>
    <Grid
      columns={{
        count: 6,
        size: "auto"
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </Grommet>
);

// RENDER CLIENT
ReactDOM.render(
	<div id="global-wrapper">
		<p>This is the app</p>
    <NColumnGrid />
	</div>,
	document.getElementById('root')
);

console.log(Grommet);


