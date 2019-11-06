# Stock Trader App - Vue.js

[Vue.js Docs](https://vuejs.org/v2/guide/)

### Run:

```javascript
    brew install yarn
    npm install npm@latest -g

    yarn serve
    npm run dev
```

#### This application is an exercise I've undertaken to simulate a simple Stock Trading mechanism with Vue.js. The App has been built with Vue.js, Vue Router and Vuex, with the assistance of Firebase for the Database management. Here, we've used Bootstrap (edited slightly) to ease our styling pressures to concentrate more heavily on the fundamentals of Vue and Vuex.

###### The Dashboard gives the user some tips on the app and how to go about getting started, whilst setting out a goal to achieve in a timeframe!

[![Screenshot-2019-11-06-at-2-44-42-pm.png](https://i.postimg.cc/1tNqWQJ4/Screenshot-2019-11-06-at-2-44-42-pm.png)](https://postimg.cc/k6qG4krd)

###### The 'Market Summary' section outlines 8 companies and their respective stock prices. The user must select from these carefully as they only begin trading with £1,000.

[![Screenshot-2019-11-06-at-2-48-37-pm.png](https://i.postimg.cc/kX8DLsQY/Screenshot-2019-11-06-at-2-48-37-pm.png)](https://postimg.cc/jLxs7zky)

###### If the user attempts to buy a stock out of their price range they will be warned of such, and the 'Buy' button will be disabled - instead an 'Insufficient Funds' button prompted.

[![Screenshot-2019-11-06-at-2-49-58-pm.png](https://i.postimg.cc/RZKfQ9pF/Screenshot-2019-11-06-at-2-49-58-pm.png)](https://postimg.cc/TK2pT86M)

###### When the user buys stocks in a company they can navigate to the 'Your Stocks' page and view each stock, along with quantity.

[![Screenshot-2019-11-06-at-2-52-53-pm.png](https://i.postimg.cc/fWFQYh01/Screenshot-2019-11-06-at-2-52-53-pm.png)](https://postimg.cc/rzSHL3j9)

###### If the user attempts to sell more stock than they own, the 'Sell' button will be disabled.

[![Screenshot-2019-11-06-at-3-08-16-pm.png](https://i.postimg.cc/m2f8xbzY/Screenshot-2019-11-06-at-3-08-16-pm.png)](https://postimg.cc/0rnpD1Cj)

###### Clicking 'End Day' will cycle through each day, with stock prices fluctuating as time passes. The user may incur loses as a result or make profits on their purchased stocks (in this case, monies were lost).

[![Screenshot-2019-11-06-at-2-56-55-pm.png](https://i.postimg.cc/RCkdKMv3/Screenshot-2019-11-06-at-2-56-55-pm.png)](https://postimg.cc/ThcnXvLG)

###### When cycling days and stock prices of owned stocks do go up, the user can offload them to make profit (here, selling all 3 stocks of Facebook for close to double what was paid).

[![Screenshot-2019-11-06-at-3-01-47-pm.png](https://i.postimg.cc/W4rVXNQd/Screenshot-2019-11-06-at-3-01-47-pm.png)](https://postimg.cc/CZF9KgM0)

###### From here, the user can see clearly that their sold stock has been sold (gone from 'Your Stocks'), and they have mate clear profit (£88).

[![Screenshot-2019-11-06-at-3-04-48-pm.png](https://i.postimg.cc/MTFhShkC/Screenshot-2019-11-06-at-3-04-48-pm.png)](https://postimg.cc/DJ1CQpw6)

###### The user can then use the 'Save | Load' dropdown to 'Save' their data. This data is saved to a simple back-end database on Google's Firebase.

[![Screenshot-2019-11-06-at-3-06-02-pm.png](https://i.postimg.cc/wTGckg58/Screenshot-2019-11-06-at-3-06-02-pm.png)](https://postimg.cc/KRtMGXsJ)

###### In the case the user makes a mistake, they can chose to revert back to a their Saved data by clicking 'Load Data', to pull down the data they posted to the database by using 'Save Data' originally.

[![Screenshot-2019-11-06-at-3-21-11-pm.png](https://i.postimg.cc/CKfPWJH1/Screenshot-2019-11-06-at-3-21-11-pm.png)](https://postimg.cc/3yYFGXq5)

###### The application is obviously very basic, omitting a real algoritm to calculate stocks - sometimes leading to stock prices going down the whole way to £1 in which they are unable to rise again. It features multiple bugs and is styled with basis Bootstrap 3 HTML components, but has been a good exercise for using Vue, VueRouter and Vuex for managing state and manipulating the store along with using VueResource to access a database, both putting and getting.