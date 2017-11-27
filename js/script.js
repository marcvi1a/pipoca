// load the IFrame Player API code asynchronously
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// default settings
var playerParameters = {
    width: '640',
    height: '360',
    // videoId: 'H31arWwLzfE',
    playerVars: {
        'color': 'white',
        'controls': 2,
        'iv_load_policy': 3,
        'origin': 'https://pipoca.tv',
        'listType': 'playlist',
        'playlist': 'uCgTlXsDr9E',   // pipoca clip
        'rel': 0,
        'showinfo': 0
    },
    events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
    }
};

// example
var videoList = ['at_xYXJ5_34', 'ZoBmGIhRMqs', 'ZE2tylRYJW8', 'btGJtdW07w4', 'kXwHeP0mcjQ',
                 'SsfWWxYnTeA', 'jA_1xr2Aa-c', 'x08rZCpOLV4', 'or4oWK16B1M', '8LzKlww4UaA',
                 '3h2nSMkYdlI', 'cjOnstHI4dY', 'FhivLWpl8D4', 'aUv9LoQ3Ca0', 'ZM7luG_00S8',
                 '1YqSImfvyAk', 'n_u0z8O2YKk', 'srieqJYfNwI', 'lu9gXze-gB0', 'B5sjPc6Dh7I',
                 'ApqrweQaYoo', '7e1llBM-24I', 'Bf1RIvCw-XE', 'n3uQ0eUuK5Y', 'Wtrb_zlQL6Y',
                 '1HftUZqoYxo', 'r3oeubf9mfA', 'vq2llrEmY_w', 'zRywQz8ZGNw', '5WgVrO1--lc',
                 'uWM1TqN4MXs', 'kmgZGm18Xn0', '7VPQLberwPk', 'Z3FQGnqgmXk', '62hVw6mGl-8',
                 'VnNBxxy5-Cc'];

function randomVideoId() {
	var index = (Math.floor(Math.random() * videoList.length));
	return videoList.splice(index, 1)[0];
};

function playerParametersRandomVideoId() {
    var output = playerParameters;
    output.videoId = randomVideoId();
    return output;
}

// create <iframe>s
var player1, player2, player3, player4, player5, player6, player7, player8, player9;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', playerParametersRandomVideoId());
    player2 = new YT.Player('player2', playerParametersRandomVideoId());
    player3 = new YT.Player('player3', playerParametersRandomVideoId());
    player4 = new YT.Player('player4', playerParametersRandomVideoId());
    player5 = new YT.Player('player5', playerParametersRandomVideoId());
    player6 = new YT.Player('player6', playerParametersRandomVideoId());
    player7 = new YT.Player('player7', playerParametersRandomVideoId());
    player8 = new YT.Player('player8', playerParametersRandomVideoId());
    player9 = new YT.Player('player9', playerParametersRandomVideoId());
}

// events onReady
// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// events onStateChange
// var regexVideoId = /[a-zA-Z0-9_-]{8,}$/g,
//     videoUrl, videoId;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING) {     // catch original video id
//         if (!event.target.catch) {                   // 1st iteration it's false
//             videoUrl = event.target.getVideoUrl();
//             videoId = regexVideoId.exec(videoUrl)[0];
//         }
//         event.target.catch = true;
//     }
//     if (event.data == YT.PlayerState.ENDED) {       // load original video
//         alert(event.target.getVideoUrl());
//         if (event.target.rewind) {                  // 1st iteration it's false
//             event.target.cueVideoById(videoId);
//         }
//         event.target.rewind = true;
//     }
// }


// CSS ADJUSTMENTS

var playerList = document.querySelectorAll('.player'),
    actualWidth = playerList[0].offsetWidth,
    playerHeight = (actualWidth / 16 * 9 ) + 'px';
playerList.forEach(function(player) {
    player.style.height = playerHeight;
});

var headerHeight = document.querySelector('header').offsetHeight,
    playerSection = document.querySelector('#players');
playerSection.style.marginTop = headerHeight + 'px';
