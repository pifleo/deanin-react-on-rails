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
```