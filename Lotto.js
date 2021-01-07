// 이미지 검색 함수
function searching(search_text){
    $.ajax({ // Request
    method: "GET",
    url: "https://dapi.kakao.com/v2/search/web",
    data: { query: search_text, sort: "recency" },
    headers: { Authorization: "KakaoAK 6676411ad5a6389306c0fc9e8fdf2073" }
})
    .done(function (msg) { // response
        $( "p" ).append( "<strong>"+msg.documents[0].contents+"</strong>" );
        $( "p" ).append( "<strong>"+msg.documents[0].url+"</strong>" );
    });
}