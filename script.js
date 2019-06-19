
$("button").on("click", function() {
    //search term var
    const keyword = $("#search-term").val()
    //start date var
    let startDate = $("#begin-date").val()
    
    //end date var
    let endDate = $("#blah").val()
    //attr("data-keyword");
    console.log(keyword);
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=infs8sNRCHkd40EWJIGLYHjPiWft0q9L"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
console.log(response);
});
});
console.log("hi");

