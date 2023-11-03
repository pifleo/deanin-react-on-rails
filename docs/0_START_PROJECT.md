# React On Rails project

React on Rails 7 Series
https://www.youtube.com/watch?v=nKybfmmO7JU&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=1

## Video 1 • React on Rails 7 Series

```bash
rails new deanin-react-on-rails --api
# Edit Gemfile rack-cors
bundle install
rails g scaffold post title body:text
rails db:migrate
rails db:seed
rails test
bundle add 'rails-controller-testing'
```

## Video 2 • The Vite App - React on Rails 7 Part 2

https://www.youtube.com/watch?v=koiHRY8Be1A&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=2

```bash
npm create vite@latest
✔ Project name: … client
✔ Select a framework: › React
✔ Select a variant: › JavaScript
cd client
npm install
npm install dotenv
npm run dev # Start the server
```

## Video 3 • The Post Show Page - React on Rails 7 Part 3

https://www.youtube.com/watch?v=Qoi-5xp08tY&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=3

```bash
npm i react-router-dom
npm run dev
git add .
git commit -m "..."
git push
```

## ...4-8

https://www.youtube.com/watch?v=XeoIWqgLqZE&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=4

## Adding Jest Testing - React on Rails Part 9

https://www.youtube.com/watch?v=BrGDg7JLspA&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=9

```bash
cd client/
npm install --save-dev jest @testing-library/jest-dom @testing-library/react @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react vite-plugin-testing babel-plugin-transform-import-meta jest-environment-jsdom eslint-plugin-jest jest-fetch-mock history
npm run test
```

## Testing the Routes Component - React on Rails Part 10


## Jest Code Coverage in React on Rails Part 11-12

https://www.youtube.com/watch?v=g9iLwLM2Fc8&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=11

```bash
npm run coverage
```

## Video 19

```bash
rails active_storage:install
rails db:migrate
```

## Video 24 • Upgrade Rails

Upgrading to Rails 7.1 - React on Rails Part 24
https://www.youtube.com/watch?v=OMWzTSOlQdk&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=24

We already have the Rails 7.1.1 here, so let's just try a Gemfil update

```bash
bundle update rails
bundle update
rails app:update
rails db:migrate
```

 ## Video 25 • Searching with React on Rails Part 25

Searching with React on Rails Part 25
https://www.youtube.com/watch?v=Q497xlP-hpU&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=25
Adding a Searchbar to React on Rails Part 26
https://www.youtube.com/watch?v=GZxz8jTxh4s&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=26

 ```bash
 rails g controller Api::V1::Search posts
 ```

## Video 27-28

Kaminari Pagination Setup for React on Rails Part 27
https://www.youtube.com/watch?v=ANbQwUB--qw&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=27
The Pagination Component in React on Rails Part 28
https://www.youtube.com/watch?v=NOKbOdYbO8I&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=28

```bash
bundle add kaminari
```