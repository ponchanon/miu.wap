$(function(){

    const url = "https://jsonplaceholder.typicode.com";
    const getUserUrlRoot = url + "/users/";
    const getPostsUrlRoot = url + "/posts?userId=";
    const getCommentsUrlRoot = url + "/comments?postId="; 
    let getUserUrl;
    let getPostsUrl;
    let getCommentsUrl;
    let userId;

    function displayUserInfo(userInfo){

        const userInfoStr= "User Name: <span id='name'>"+userInfo.name+"</span><br>Email: <span id='email'>"+userInfo.email+
        "</span><br>Address:<br><span id='street'>"+userInfo.address.street+"</span><br><span id='suite'>"+userInfo.address.suite+
        "</span><br><span id='city'>"+userInfo.address.city+"</span>, <span id='zip'>"+userInfo.address.zipcode+"</span>";
        
        const dispFrame = $("#user-info");
        dispFrame.addClass("display");
        const legend = $("<h2>");
        legend.text("User Information");
        dispFrame.append(legend);
        dispFrame.append(userInfoStr);
        $("body").append(dispFrame);
    }

    function addEachComment(comments,postNo){

        const postId = "#" + postNo + "post";
        const thisPost = $(postId);
        const commentsWin = $("<div>");
        commentsWin.addClass("comments-win");
        thisPost.append(commentsWin);

        for(const comment of comments){

            const commentFrame = $("<div>");
            commentFrame.addClass("comment");
            const commenterLbl = $("<hr4>");
            commenterLbl.addClass("commenter-lbl");
            commenterLbl.text("Commenter: ")
            const commenter = $("<h5>");
            commenter.addClass("commenter");
            commenter.text(comment.name);
            const email = $("<h6>");
            email.addClass("commenter-email");
            email.text(comment.email);
            const commentBody = $("<textarea>");
            commentBody.val(comment.body);
            commentBody.addClass("comment-bd");
            commentFrame.append(commenterLbl);
            commentFrame.append(commenter);
            commentFrame.append(email);
            commentFrame.append(commentBody);

            commentsWin.append(commentFrame);

        }

    }

    function displayComments(){
        const thisPost = parseInt(this.id);
        getCommentsUrl = getCommentsUrlRoot+thisPost;
        toggleLoading();
        fetch(getCommentsUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(commentJson){
            toggleLoading();
            addEachComment(commentJson,thisPost);
        })
        .catch(error => console.error('Error:', error));
    }

    function displayPosts(posts){
        const postsWin = $("<div>");
        postsWin.addClass("posts-win");
        $("body").append(postsWin);
        for(const post of posts){
            const postFrame = $("<div>");
            postFrame.attr("id",post.id+"post");
            postFrame.addClass("post");
            const postNum = $("<h4>");
            postNum.addClass("post-num");
            postNum.text("Post "+post.id+":")
            const postTitle = $("<h4>");
            postTitle.addClass("post-title");
            postTitle.text(post.title);
            const postBody = $("<textarea>");
            postBody.addClass("post-body");
            postBody.val(post.body);
            const showComments = $("<button>");
            showComments.text("show comments");
            showComments.attr("id",post.id+"show");
            showComments.addClass("show-comment-btn");
            showComments.click(displayComments);

            postFrame.append(postNum);
            postFrame.append(postTitle);
            postFrame.append(postBody);
            postFrame.append(showComments);

            postsWin.append(postFrame);

        }
    }
    
    function toggleLoading(){
        loadingImg = $("#loading");
        if(loadingImg.css("display")==="none"){
            loadingImg.show();
        }else{
            loadingImg.hide();
        }
    }
    toggleLoading();

    $("[type='submit'").click(function(evt){
        evt.preventDefault();
        userId = $("#user-id").val();
        getUserUrl= getUserUrlRoot + userId;
        getPostsUrl = getPostsUrlRoot + userId;
        
        toggleLoading();
        fetch(getUserUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(userJson){
            displayUserInfo(userJson);
            toggleLoading();
        })
        .catch(error => console.error('Error:', error));

        toggleLoading();
        fetch(getPostsUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(postsJson){
            displayPosts(postsJson);
            toggleLoading();
        })
        .catch(error => console.error('Error:', error));
    });
    
});

// user info:
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     }
//
// user posts:
//
// [{
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },...]
//
// post comments:
//
// [
//     {
//       "postId": 1,
//       "id": 1,
//       "name": "id labore ex et quam laborum",
//       "email": "Eliseo@gardner.biz",
//       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//       "postId": 1,
//       "id": 2,
//       "name": "quo vero reiciendis velit similique earum",
//       "email": "Jayne_Kuhic@sydney.com",
//       "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },...]