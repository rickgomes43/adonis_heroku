'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index ({ request, response, view }) {
  }

  async create ({ request, response, view }) {
  }

  async store({request}) {
    const data = request.only([
      'user_id',
      'title',
      'content'
    ])
    const post = await Post.create(data)
    return post
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
