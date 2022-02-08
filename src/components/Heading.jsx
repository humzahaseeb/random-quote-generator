import React from 'react';
import Typography from '@material-ui/core/Typography';

const Heading = () => {
  return (
    <Typography
        variant='h4'
        style={{display: 'flex',
                justifyContent:'center',
                marginTop: '7.5rem',
        }}
    >
        Random Quote Generator
    </Typography>
  );
};

export default Heading;
