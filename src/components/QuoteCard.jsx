import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';

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
        id="quote-box"
      >
        <Card
            sx={{
                    marginTop: '2rem',
                    width: '50%',
                    height: '50%',
                    padding: '1rem',
                }}
            variant="outlined"
        >
            <CardContent>
                <Typography id='text' variant="h5">
                    {quote}
                </Typography>
                <br />
                <Typography id='author' variant='h6'>
                    - {author}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    size="large"
                    onClick={handleClick}
                    id='new-quote'
                    variant="contained"
                    color="secondary"
                >
                    New Quote
                </Button>
                <Button
                    size="large"
                    variant="contained"
                >
                    <a
                        id='tweet-quote'
                        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                        <TwitterIcon
                            fontSize='small'
                            style={{display: 'flex', alignItems: 'center', margin: '0.2rem'}}/>
                    </a>
                </Button>
            </CardActions>
        </Card>
      </div>
  );
};

export default QuoteCard
