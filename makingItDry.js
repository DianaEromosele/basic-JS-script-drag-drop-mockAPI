	function getUser(userId, callBack) {
		$.get(root + "/users/" + userId, function(user) {
			$(".main-container").append('<div id="user-' + user.id + '" user-Id="' + user.id + '">User ' + userId + ': ' + user.name + '</div>')
		});
	}


	getUser(1)
	getUser(2)

	function getAlbums(userId) {

		$.get(root + "/users/" + userId + "/albums", function(albums){

			albums.forEach(function(album, index){

				let albumRowHTML = '<div class="flexbox-row" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" userId="' + album.userId + '" id="' + album.id + '"><div class="flexbox-cell album-id">' + album.id + '</div><div class="flexbox-cell album-title">' + album.title + '</div></div>';

					$(albumRowHTML).appendTo("#user-" + album.userId);
			});
		});

	}

	getAlbums(1);
	getAlbums(2);
