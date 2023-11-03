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