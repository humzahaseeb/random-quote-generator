import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
                    margin: '2rem',
                    width: '50%',
                    height: '50%',
                    padding: '1rem',
                }}
            variant="outlined"
            id='quote-card'
        >
            <CardContent>

                <Typography
                    id='text'
                    variant="h5"
                    style={{
                        fontStyle: 'italic',
                        fontWeight: 500,
                    }}
                >
                 <FormatQuoteIcon fontSize='large'/>   {quote}
                </Typography>

                <Typography
                    id='author'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        marginTop: '1rem',
                        color: '#295f4e',
                        fontWeight: 600,
                    }}
                >
                    ~ {author}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    size="medium"
                    onClick={handleClick}
                    id='new-quote'
                    variant="contained"
                    style={{backgroundColor: '#295f4e'}}
                >
                    New Quote
                </Button>
                <Button
                    size="medium"
                    variant="contained"
                    style={{backgroundColor: '#295f4e'}}
                >
                    <a
                        id='tweet-quote'
                        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                     Tweet  <TwitterIcon fontSize='v-small'/>
                    </a>
                </Button>
            </CardActions>
        </Card>
      </div>
  );
};

export default QuoteCard
