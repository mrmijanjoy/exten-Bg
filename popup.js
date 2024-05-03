$(function(){
    $('#submit').click(function(){
        var imagelink = $('#imagelink').val();
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo:"changeBg", imagelink:imagelink});
        });
    });
});


// chrome.storage.sync.get('username', function(Greeting){
//     if(Greeting.username){
//         $('#name').html(Greeting.username);
//     }
// });

// $('#input').keyup(function(){
//     $('#name').html($('#input').val());
// });


// $('#submit').click(function(){
//     var username = $('#input').val();
//     chrome.storage.sync.set({'username':username}, function(){
//         close();
//     });
// });