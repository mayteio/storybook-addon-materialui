import React, { FC } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

export const TestComponent: FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom>
        Testing the addon
      </Typography>
      <Button variant="contained" color="primary">
        Testing themes should be easy.
      </Button>
    </Box>
  );
};

export default TestComponent;
