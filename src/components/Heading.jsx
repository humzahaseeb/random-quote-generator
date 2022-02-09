import React from 'react';
import Typography from '@material-ui/core/Typography';

const Heading = () => {
  return (
    <Typography
        variant='h3'
        style={{display: 'flex',
                justifyContent:'center',
                marginTop: '7.5rem',
                color: '#fff',
        }}
    >
        Breaking Bad Quote Generator
    </Typography>
  );
};

export default Heading;
