 $( document ).ready(function() {
    var v1 = { "Song_name": "Song Name 1", "Artist_name": "Artist Name 1", "Album_name": "Album Name 1", "Song_length": 60, "Genre": "Genre 1"};
    var v2 = { "Song_name": "Song Name 2", "Artist_name": "Artist Name 2", "Album_name": "Album Name 2", "Song_length": 60, "Genre": "Genre 2"};   
    var v3 = { "Song_name": "Song Name 3", "Artist_name": "Artist Name 3", "Album_name": "Album Name 3", "Song_length": 60, "Genre": "Genre 3"};   
    
    var obj = { "obj1": v1, "obj2": v2, "obj3": v3 };
    
    $("ul").append("<li>"+obj["obj1"]["Song_name"]+"</li>");
    $("ul").append("<li>"+obj["obj1"]["Artist_name"]+"</li>");
    $("ul").append("<li>"+obj["obj1"]["Album_name"]+"</li>");
    $("ul").append("<li>"+obj["obj1"]["Song_length"]+"</li>");
    $("ul").append("<li>"+obj["obj1"]["Genre"]+"</li>");
    });
 
