import React from 'react';
import { Typography } from '@mui/material';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';

const HomePage = () => {
  return (
    <div>
      <Typography variant="h1" component="h1" mt={10} align={'center'}>
        Welcome to Contact Hub!
      </Typography>

      <Typography variant="h4" component="h2" mt={5} align={'center'}>
        Quick & Smart Search
      </Typography>

      <Typography variant="h4" component="h2" mt={5} align={'center'}>
        Your Contacts, Your Privacy – Register Today!
      </Typography>
      <LockTwoToneIcon
        sx={{ fontSize: 100, m: 'auto', display: 'block', mt: 5 }}
      />
    </div>
  );
};
export default HomePage;
