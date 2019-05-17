function createTweetElement(tweetData) {
  const user = tweetData.user;
  console.log(tweetData.user);
  const $tweet = $('<article>')
    .addClass("shadow")
    .attr("id", "tweet");

  const $header = $('<header>')
    .addClass("shadow")
    .addClass("tweetHeader");
    

  const $userName = $('<div>').addClass("name").text(tweetData.user.name);
  const $handle = $('<div>').text(tweetData.user.handle);
  const $avatar = $('<img>').attr("src", tweetData.user.avatars.small);

  $header
    .append($avatar)
    .append($userName)
    .append($handle);
    

 const $content = $('<p>').addClass('centered-tweet').text(tweetData.content.text);
 const $footer = $('<footer>').addClass('tweet-footer').text(formatTime(tweetData.created_at));

  return $tweet
    .append($header)
    .append($content)
    .append($footer);

}

var $tweet = createTweetElement(tweetData[0]);

const tweetData = [
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
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(array) {
  value =[];
for (const i in tweetData) {
  value.push(tweetData[i]);
  return $("#tweets-container").append(value)
}
}
console.log(renderTweets(tweetData))



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

//Convenient AJAX way
function loadTweets() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    success: function (tweets) {
      $("textarea").val("");
      renderTweets(tweets);
    }
  })
}

$("#submitform").submit(function(event) {
  event.preventDefault();
  let post1 = $.ajax({
              url: '/tweets',
              type: 'POST' ,
              data:  $("#submitform").serialize(),
              success: loadTweets
            
              
});   
//renderTweets(loadTweets());

});


const $button = $("#nav-button").click(function() {
                  $(".compose").slideDown(4000, function(){

                  });
});

