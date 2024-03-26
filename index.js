import 'dotenv/config';
import cheerio from "cheerio";
import fetch from 'node-fetch';

const url = process.env.URL;
const model = process.env.DATA;

fetch(url)
  .then((res) => res.text())
  .then((body) => {
    const $ = cheerio.load(body);
    console.log($(model).text());
  })
  .catch(console.error)