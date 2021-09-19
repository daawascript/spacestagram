# Spacestagram

**An app for shopify winter 2022 front-end internship.**

## Intro

We are expanding Shopify's business to the universe and fetching photos from outer space thanks to NASA's amazing Astronomy Picture Of the Day API. The app initially loads 10 pictures and is infinitely scrollable with 10 more pictures every time you reach the bottom of the page.  
The live version of this app can be found at <https://spacestagram.theoleveque.com>.

## Running the project locally

You're going to need a NASA api key that you can get for free at <https://api.nasa.gov/>

1. Clone this repo `git clone https://github.com/daawascript/spacestagram.git`
2. `cd spacestagram` and run `npm install`
3. Create a file at the root of the project named `.env`
4. Create a variable inside the `.env` file with the following name: `REACT_APP_API_KEY=<YOUR_API_KEY>` where you replace `<YOUR_API_KEY>` by the api key you received from NASA
5. Run `npm start`

## Technologies & choices

This project is built with React and Styled-Components.  
React is great at creating interactive UI with reusable components. Styled-components helped to keep our CSS maintainable and the use of props directly in the styling is a feature that simplifies conditional styling/rendering greatly.  
[Shopify's own eslint plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin) was used in order to respect the company's coding style.

## Accessibility

I used the [a11y eslint jsx plugin](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) in order for the app to stay accessible throughout development. Lighthouse reports were also ran to make sure that nothing was left behind.
I added `alt` and `aria-label` attributes for `svgs`, `img` and `button` elements. Semantic tags are used as much as possible, a couple `div` elements are present but they act as containers.

## Current Features

- Infinite scrolling
- Instagram-like UI
- Chronological feed from Astronomy Picture Of the Day (APOD)
- Random feed from APOD
- Like/unlike picture with animation (Shopify suggestion)
- Loading state when waiting for NASA's API to return data (Shopify suggestion)

Please see below for the features I will keep working on

## Future Features

- Search box for NASA image and video library
- Mars Rover Feed
- Earth Polychromatic Imaging Camera (EPIC) feed
- Making the UI look exactly like Instagram's

---

### Special Thanks

1. [Instagram](https://instagram.com) for their simplistic yet elegant design as well as some of their svg icons,
2. [NASA](https://www.nasa.gov/) for their great API,
3. [IconMonstr](https://iconmonstr.com/) for the other svg icons
4. [Shopify](https://www.shopify.ca/) for the opportunity to unleash my creativity on an interesting idea of theirs,
5. [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for their accessibility auditing
