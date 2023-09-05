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
function QuoteApp(): JSX.Element {
  const [quote, setQuote] = useState<string | null>(null);

  /** retrieve a random quote from quotes API */
  async function getQuote(): Promise<void> {
    const response = await axios.get("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const data = response.data;
    const randomQuote: string = data.quote;
    setQuote(randomQuote);
  }

  return (
    <QuoteDisplay getQuote={getQuote} quote={quote}/>
  );
}

export default QuoteApp;