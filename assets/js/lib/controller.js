class Controller {
   constructor(model, view) {
      this.appModel = model
      this.appView = view
      this.posts = []
      this.postsPerPage = ["10", "25", "50"]
      this.popular = ["postPlays", "postComments", "userLikes", "followers"]
      this.title = ["title", "titleDes"]
      this.index = 0;
      this.numberOfPosts = 10;
      this.totalPages;
   }
   init() {
      this.appView.changeHandler = this.sortByParam.bind(this)
      this.appView.clickHandler = this.slide.bind(this)
   }
   renderRoute() {
      var data = this.appModel.getData();
      data.then(res => this.displayPosts(res.data))
   }
   displayPosts(postModelData) {
      postModelData.map(post => {
         this.posts.push({
            "videoLink": post.user.link,
            "userPicture": post.user.pictures != null ? post.user.pictures.sizes[2].link : 'assets/images/profile.png',
            "userLink": post.link,
            "title": post.name,
            "description": post.description === null ? "No description" : post.description.length >= 500 ? post.description.substring(0, 500) : post.description,
            "postLikes": post.metadata.connections.likes.total.toLocaleString(),
            "postPlays": post.stats.plays === null ? "0" : post.stats.plays.toLocaleString(),
            "postComments": post.metadata.connections.comments.total.toLocaleString(),
            "userLikes": post.user.metadata.connections.likes.total.toLocaleString(),
            "followers": post.user.metadata.connections.followers.total.toLocaleString()
         })
      })

      this.appView.render(this.posts.slice(0, this.numberOfPosts))
      this.totalPages = Math.ceil(this.posts.length / this.numberOfPosts);
      this.setCounter(1)
   }
   sortByParam(e) {
      var index = e.target.options[e.target.selectedIndex].value
      if (this.postsPerPage.includes(index)) {
         this.appView.render(this.posts.slice(0, index))
      } else if (this.popular.includes(index)) {
         const sortedByPopular = this.sortByPopular(this.posts, index)
         this.appView.render(sortedByPopular.slice(0, this.numberOfPosts))
      } else if (this.title.includes(index)) {
         const sortedByTitle = this.sortByTitle(this.posts)
         index === "title" ? this.appView.render(sortedByTitle.slice(0, this.numberOfPosts)) : this.appView.render(sortedByTitle.reverse().slice(0, this.numberOfPosts))
      }

   }
   sortByPopular(arr, prop) {
      return arr.sort((a, b) => b[prop] - a[prop])

   }
   sortByTitle(arr) {
      return arr.sort((a, b) => a.title.localeCompare(b.title))
   }

   slide(e) {
      var target = e.currentTarget.dataset.button,
         offset = (target === 'next') ? this.index = this.index + 1 : this.index = this.index - 1;
      this.index = Math.min(Math.max(offset, 0), this.totalPages - 1)

      var posts = this.posts.slice(this.index * this.numberOfPosts, (this.index + 1) * this.numberOfPosts);

      this.setCounter(this.index + 1)
      this.appView.render(posts)
   }
   setCounter(currentPage) {
      document.querySelector('.pagination-counter').innerHTML = (currentPage) + ' of ' + this.totalPages
   }
}