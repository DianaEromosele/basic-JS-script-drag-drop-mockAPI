$(function() {

 let root = 'https://jsonplaceholder.typicode.com';
 let mainContainer = $('<div class="main-container"></div>');

 $.get(root + "/users")
 .then(function(users) {
  for (let index = 0; index < 2; index++) {

   let htmlBlockForEachUser = '<div class="user" id=' + users[index].id + '><div class="user-name">' + users[index].name + '</div><div class="albums flexbox-table" ></div></div>'
   mainContainer.append(htmlBlockForEachUser);
  };

  return users;
  })
  .then(function(users){
   let albums = [];

   // Promise.all takes in an array, will only call .then when all of the promises are resolved. All get requests essentially returns a promise

   for (let slot = 1; slot < 3; slot++) {
     let promiseToGetAlbums = $.get(root + "/users/" + slot + "/albums").promise();
     albums.push(promiseToGetAlbums)
   }
   
   return Promise.all(albums);
   
   }).then(function(albums){

   albums.forEach(function(userAlbums, index){
    userAlbums.forEach(function(album, index){
     let htmlBlockForEachAlbum = '<div class="flexbox-row" album-id=' + album.id + ' draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)"><div class="flexbox-cell album-id">' + album.id + ' </div><div class="flexbox-cell album-title">' + album.title + '</div></div>'

     mainContainer.find(' #' + album.userId + ' .albums').append(htmlBlockForEachAlbum);

    });
   });

   $("body").append(mainContainer);
     
   }).catch(function(e){
    console.log(e);
   });
});