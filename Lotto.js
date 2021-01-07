// 이미지 검색 함수
function searching(search_text){
    $.ajax({ // Request
    method: "GET",
    url: "https://dapi.kakao.com/v2/search/image",
    data: { query: search_text, sort: "recency" },
    headers: { Authorization: "KakaoAK 6676411ad5a6389306c0fc9e8fdf2073" }
})
    .done(function (msg) { // response
        for(var i=0; i<5; i++){
            $( "p" ).append( "<strong>"+msg.documents[i].display_sitename+"</strong> " );
            $( "p" ).append( "<img src='"+msg.documents[i].thumbnail_url+"'/>" );
            $("p").append("<br>")
        }
    });
}