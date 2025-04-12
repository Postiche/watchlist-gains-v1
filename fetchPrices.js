// utils/fetchPrices.js
export async function fetchYahooPrice(symbol) {
  const encodedSymbol = encodeURIComponent(symbol);
  const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodedSymbol}?interval=1d`);
  const data = await response.json();
  return data.chart.result[0].meta.regularMarketPrice;
}