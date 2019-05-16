/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() { 

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  
];

function formatTime (time) {
	var diff = Math.floor((Date.now() - time) / 1000);
  var interval = Math.floor(diff / 31536000);

  if (interval >= 1) {
    return interval + "y";
  }
  interval = Math.floor(diff / 2592000);
  if (interval >= 1) {
    return interval + "m";
  }
  interval = Math.floor(diff / 604800);
  if (interval >= 1) {
    return interval + "w";
  }
  interval = Math.floor(diff / 86400);
  if (interval >= 1) {
    return interval + "d";
  }
  interval = Math.floor(diff / 3600);
  if (interval >= 1) {
    return interval + "h";
  }
  interval = Math.floor(diff / 60);
  if (interval >= 1) {
    return interval + " m";
  }
  return "<1m";
}

//Render Tweets
function renderTweets(tweet) {
  for (let i in tweet) {
     $("#tweets-container").prepend(createTweetElement(tweet[i]));
  }
}

//Created Tweet
function createTweetElement(tweetData) {
  //const user = tweetData.user;
  let $tweet = $('<article>')
    .addClass("shadow")
    .attr("id", "tweet");

  let $header = $('<header>')
    .addClass("shadow")
    .addClass("tweetHeader");
    

  let $userName = $('<div>').addClass("name").text(tweetData.user.name);
  let $handle = $('<div>').text(tweetData.user.handle);
  let $avatar = $('<img>').attr("src", tweetData.user.avatars.small);
  
  $header
    .append($avatar)
    .append($userName)
    .append($handle);
    

 let $content = $('<p>').addClass('centered-tweet').text(tweetData.content.text);
 let $footer = $('<footer>').addClass('tweet-footer').text(formatTime(tweetData.created_at));

  $tweet = $tweet.append($header).append($content).append($footer);
  return $tweet;

};


$("#submitform").submit((event) =>{     
	event.preventDefault();
	let $form = $(this),
	tweet = $form.find("textarea[name='text']").val(),
	url = $form.attr("action");
		$.post("/tweets",{text: tweet}).done(data => {
			loadTweets();
		});
	});

	function loadTweets() {
		$.ajax({
			url: "/tweets",
      method: "GET",
      success: console.log("Retrieved Tweets")
		})
		  .then(function (tweets) {
			$("textarea").val("");
			renderTweets(tweets);
		})
	}

renderTweets(loadTweets());

});

//   $("#submitform").submit(function(event) {
//   event.preventDefault();
//   let $post1 = $.ajax({
//     url: '/tweets',
//     method: 'POST' ,
//     data:  $("#submitform").serialize(),
//     success: $("textarea").val(""),
//     loadTweets()
            
//   });
      


// //GET Request from database

// function loadTweets() {
//   $.ajax({
//     url: `/tweets`,
//     method: 'GET',
//     dataType: "json",
//     success: function (data) {
//       console.log('Success: ', data);
//       renderTweets(data);
//     }
//   });
// }
// renderTweets(loadTweets());

//Rendering Every new Tweet




// renderTweets(loadTweets);

//   const tweetHTML = `
//     <article class="shadow" id="tweet">
//       <header class="shadow tweetheader">
//         <div>${tweetData.user.name}</div>
//         <div>${tweetData.user.handle}</div>
//         <img src="${tweetData.user.avatars.small}"/>
//       </header>
//       <p class="centered-tweet">${tweetData.content.text}</p>
//       <footer class="tweet-footer">${tweetData.created_at}</footer>
//     </article>
//   `
//   return tweetHTML;
// }

