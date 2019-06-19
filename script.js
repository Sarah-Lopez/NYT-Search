$("button").on("click", function() {
    const keyword = $(this).attr("data-keyword");
    
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?="
     + keyword + "&api-key=infs8sNRCHkd40EWJIGLYHjPiWft0q9L"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        
    })
    
})

console.log(keyword)
