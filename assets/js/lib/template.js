class Template {
    
    postsTemplate(ModelData) {
        return ModelData.map((post)=> (
						`<div class="pod">
						    <div class="pod-profile-img">
						        <a href="${post.videoLink}">
						   <img src="${post.userPicture}" alt="profile-picture" />
						    </a>
						    </div>
						    <div class="pod-content">
						        <a href="${post.userLink}" target='_blank' rel="noopener noreferrer"><h2>${post.title}</h2></a>
						        <p>${post.description}</p>
						        <div class="video-stats">
						            <span><img src="assets/images/likes.svg"/>${post.postLikes}</span>
						            <span><img src="assets/images/plays.svg"/>${post.postPlays}</span>
						            <span><img src="assets/images/comments.svg"/>${post.postComments}</span>
						        </div>
						    </div>
						</div>`                         
									
					))
		
    }

}