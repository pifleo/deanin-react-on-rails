# React On Rails project

React on Rails 7 Series
https://www.youtube.com/watch?v=nKybfmmO7JU&list=PL3mtAHT_eRewtt6HPMHFB4TMxkxiEfp9N&index=1

## Video 1

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

## Video 2

```bash
npm create vite@latest
✔ Project name: … client
✔ Select a framework: › React
✔ Select a variant: › JavaScript
cd client
npm install
npm run dev
```