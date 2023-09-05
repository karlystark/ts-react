import React, { useState } from "react";
import axios from "axios";

import QuoteDisplay from "./QuoteDisplay";

/** Component that retrieves and sets an inspirational quote,
 * shown by a child component (QuoteDisplay).
 *
 * Props:
 * - None
 *
 * State:
 * - [quote, setQuote]: the current quote
 *
 * App -> QuoteApp -> QuoteDisplay
 */

interface ApiQuoteInterface {
  quote: {
  text: string;
  author: string;
  }
}

interface QuoteInterface {
  text: string;
  author: string;
}

function QuoteApp(): JSX.Element {
  const [quote, setQuote] = useState({});

  /** retrieve a random quote from quotes API */
  async function getQuote(): Promise<void> {
    const response = await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const data: ApiQuoteInterface = response.data;
    const randomQuote: QuoteInterface = data.quote;
    setQuote(randomQuote);
  }

  return (
    <QuoteDisplay getQuote={getQuote} quote={quote}/>
  );
}

export default QuoteApp;