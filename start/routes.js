'use strict'

const Route = use('Route')

Route.get('/', () => 'Hello Word')

Route.resource('/users', 'UserController').apiOnly()
Route.resource('/posts', 'PostController').apiOnly()
