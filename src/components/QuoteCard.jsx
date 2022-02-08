import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const QuoteCard = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(response => response.json())
        .then(data => {
            setQuote(data[0].quote);
            setAuthor(data[0].author);
        })
        .catch(error => console.log(error));
    }, []);

    function handleClick() {
        fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(response => response.json())
        .then(data => {
            setQuote(data[0].quote);
            setAuthor(data[0].author);
        })
        .catch(error => console.log(error));
    }



  return(
      <div
        style={{display: 'flex',
                justifyContent:'center',
              }}
      >
        <Card
            sx={{
                    marginTop: '2rem',
                    width: '50%',
                    height: '50%',
                }}
            variant="outlined"
        >
        <CardContent>
            <Typography>
                {quote}
            </Typography>
            <Typography variant="h5" component="div">
                {author}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClick}>Get new quote</Button>
        </CardActions>
        </Card>
      </div>
  );
};

export default QuoteCard
