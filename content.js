chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.storage.sync.get('imagelink', function(customBackground){
    if(customBackground.imagelink){
        $('body').css({'background-image':`url(${customBackground.imagelink})`, "background-size":"cover", "background-attachment":"fixed"});
        $('body').css('display','none');
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendMessage){
    if(request.todo=="changeBg"){
        var image_chosen = request.imagelink;
        let imageURL = image_chosen;
        chrome.storage.sync.set({'imagelink': imageURL}, function(){});
        $('body').css({'background-image':`url(${imageURL})`, "background-size":"cover", "background-attachment":"fixed"});
        $('body').css('display','none');
    }
});