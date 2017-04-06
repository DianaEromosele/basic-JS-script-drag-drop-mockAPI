// THE SKELETON that we're using to populate the DOM with data from the mock API

<div class="-maincontainer"> // fyi, this div is already on the DOM; already on index.html 

// USER 1
	<div class="user" id=USER.ID>
		<div class="user-name">USER.NAME
		</div>
		<div class="albums flexbox-table" >
			// ALBUM 1
			<div class="flexbox-row" album-id="ALBUM.ID" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)">
				<div class="flexbox-cell album-id">ALBUM.ID</div>
				<div class="flexbox-cell album-title">ALBUM.TITLE</div>
			</div>

			// ALBUM 2
			<div class="flexbox-row" album-id="ALBUM.ID" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)">
				<div class="flexbox-cell album-id">1</div>
				<div class="flexbox-cell album-title">The Miseducation of Lauryn Hill</div>
			</div>
		
		</div>
	</div>


</div>




// THE OLD, NON-DRY, HARD-CODING WAY WE WERE DOING IT; MAKING GET REQUESTS TO EACH SPECIFIC USER, APPENDING THAT DATA TO THE JOB, AND THEN MAKING MORE GET REQUESTS FOR EACH USER'S ALBUMS. 4 GET REQUESTS IN TOTAL. NOT SCALABLE. NOT DRY. 



	// $.get(root + "/users/1", function(userOne){
	// 	$(".user-one-name").html("User 1: " + userOne.name)
	// });

	// $.get(root + "/users/2", function(userTwo){
	// 	$(".user-two-name").html("User 2: " + userTwo.name)
	// });

	// $.get(root + "/users/1/albums", function(userOneAlbums){
	// 	userOneAlbums.forEach(function(album, index){
	// 	let albumRowHTML = '<div class="flexbox-row" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" user-Id="' + album.userId + '" id="' + album.id + '"><div class="flexbox-cell album-id">' + album.id + '</div><div class="flexbox-cell album-title">' + album.title + '</div></div>';
	// 		$(albumRowHTML).appendTo("#user-" + album.userId);
	// 	});
	// });

	// $.get(root + "/users/2/albums", function(userTwoAlbums){
	// 	userTwoAlbums.forEach(function(album, index){
	// 		let albumRowHTML = '<div class="flexbox-row" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" user-Id="' + album.userId + '" id="' + album.id + '"><div class="flexbox-cell album-id">' + album.id + '</div><div class="flexbox-cell album-title">' + album.title + '</div></div>';
	// 		$(albumRowHTML).appendTo("#user-" + album.userId);
	// 	});
	// });





