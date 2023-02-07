// 2. 이 코드는 IFrame Player API 코드를 비동기식으로 로드합니다.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; //API 연결
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. 이 함수는 API 코드 다운로드 후 <iframe>(및 YouTube 플레이어)을 생성합니다.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', { 
    // <div id="player"></div>라고 해서 #player를 붙이면 안됨
    height: '360',
    width: '640',
    videoId: 'EJF919p_hb0',         // 유튜브 아이디
    playerVars : {                  // 플레이 옵션
      autoplay : true,              // 자동 재생 유무
      loop : true,                  // 반복 재생 유무
      playlist : 'EJF919p_hb0'      // 무슨 영상을 반복할 것인지 (필수)
    },
    events: {
      onReady : function(event){    // 이벤트 옵션
        event.target.mute()         // 음소거
      }
    }
  });
}
