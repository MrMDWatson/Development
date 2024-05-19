import React from "react";
import "./Quotes.css";

export default function Quotes() {
  const [quote, setQuote] = React.useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("http://www.iolaunchpad.com/quote", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      setQuote(result);
    } catch(error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getQuote();
  }, []);
  return (
    <div id="quote-box">
      <div id="quote">
        <h4 id="text">{quote.description}</h4>
      </div>
      <div id="author">
        <p>{quote.author ? `- ${quote.author}`: ""}</p>
      </div>
      <div id="quote-footer">
        <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noreferrer">Post on X</a>
        <button id="new-quote"  onClick={getQuote}>New Quote</button>
      </div>
    </div>
  )
}