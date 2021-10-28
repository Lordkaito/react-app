import React from 'react';

const Quotes = () => {
  const quotes = [
    {
      quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
      id: 1,
      author: 'Albert Einstein',
    },
    {
      quote: 'Without mathematics, there is nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
      id: 2,
      author: 'Shakuntala Devi',
    },
    {
      quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
      id: 3,
      author: 'Stefan Banach',
    },
    {
      quote: 'Mathematics is the alphabet with which God has written the universe.',
      id: 4,
      author: 'Galileo Galilei',
    },
    {
      quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
      id: 5,
      author: 'Albert Einstein',
    },
  ];
  let randomNumber;

  const randomQuote = (min, max) => {
    const randomNumberGenerate = Math.floor(
      Math.random() * (max - min) + min,
    );
    randomNumber = randomNumberGenerate;
    return randomNumber;
  };

  randomQuote(1, 5);

  return (
    <div className="quotes">
      <h1>Quotes</h1>
      <p className='quote'>{quotes[randomNumber].quote}</p>
      <p className='quoteAuthor'>{quotes[randomNumber].author}</p>
    </div>
  );
};

export default Quotes;