
console.log("Spotify Clone - Home Page");
document.getElementById('search-bar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const text = category.textContent.toLowerCase();
        category.style.display = text.includes(query) ? '' : 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const savedPlaylists = JSON.parse(localStorage.getItem('savedPlaylists')) || [];
    const savedPlaylistsDiv = document.getElementById('saved-playlists');

    if (savedPlaylists.length === 0) {
        savedPlaylistsDiv.innerHTML = '<p>No playlists saved yet.</p>';
    } else {
        savedPlaylistsDiv.innerHTML = savedPlaylists.map(playlist => `<p>${playlist}</p>`).join('');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Playlists page loaded.');
});
document.getElementById('play').addEventListener('click', function() {
    document.getElementById('audio-player').play();
});

document.getElementById('pause').addEventListener('click', function() {
    document.getElementById('audio-player').pause();
});

document.getElementById('next').addEventListener('click', function() {
    console.log('Next track');
    
});

document.getElementById('previous').addEventListener('click', function() {
    console.log('Previous track');
    
});
document.addEventListener('DOMContentLoaded', function() {
    const playlists = {
        1: ['Song A - Artist 1', 'Song B - Artist 2', 'Song C - Artist 3'],
        2: ['Song X - Artist 4', 'Song Y - Artist 5', 'Song Z - Artist 6'],
        3: ['Track 1 - Artist 7', 'Track 2 - Artist 8', 'Track 3 - Artist 9']
    };

    const playlistCards = document.querySelectorAll('.playlist-card');
    const songList = document.getElementById('song-list');
    const songsSection = document.getElementById('songs-section');

    playlistCards.forEach(card => {
        card.addEventListener('click', function() {
            const playlistId = card.getAttribute('data-playlist');
            const songs = playlists[playlistId];

            
            songList.innerHTML = '';

            
            songs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = song;
                songList.appendChild(li);
            });

            
            songsSection.style.display = 'block';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const playlists = {
        1: { name: 'Top Hits', songs: ['sample.mp3', 'sample.mp3', 'sample.mp3'] },
        2: { name: 'Chill Vibes', songs: ['sample.mp3', 'sample.mp3', 'sample.mp3'] },
        3: { name: 'Workout Mix', songs: ['sample.mp3', 'sample.mp3', 'sample.mp3'] }
    };

    const playlistCards = document.querySelectorAll('.playlist-card');
    const songList = document.getElementById('song-list');
    const songsSection = document.getElementById('songs-section');
    const saveButtons = document.querySelectorAll('.save-btn');

    
    function loadSavedPlaylists() {
        const savedPlaylists = JSON.parse(localStorage.getItem('savedPlaylists')) || [];
        if (savedPlaylists.length > 0) {
            alert(`You have ${savedPlaylists.length} saved playlist(s)!`);
            savedPlaylists.forEach(playlist => {
                console.log(`Saved Playlist: ${playlist.name}`);
            });
        }
    }

    
    loadSavedPlaylists();

    
    playlistCards.forEach(card => {
        card.addEventListener('click', function() {
            const playlistId = card.getAttribute('data-playlist');
            const selectedPlaylist = playlists[playlistId];

            
            songList.innerHTML = '';

            
            selectedPlaylist.songs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = song;
                songList.appendChild(li);
            });

            
            songsSection.style.display = 'block';
        });
    });

    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const playlistId = button.getAttribute('data-playlist');
            const selectedPlaylist = playlists[playlistId];

            
            let savedPlaylists = JSON.parse(localStorage.getItem('savedPlaylists')) || [];

            
            const isAlreadySaved = savedPlaylists.some(playlist => playlist.name === selectedPlaylist.name);

            if (!isAlreadySaved) {
                savedPlaylists.push(selectedPlaylist);
                localStorage.setItem('savedPlaylists', JSON.stringify(savedPlaylists));
                alert(`Playlist "${selectedPlaylist.name}" saved!`);
            } else {
                alert(`Playlist "${selectedPlaylist.name}" is already saved.`);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const savedPlaylistsDiv = document.getElementById('saved-playlists');
    
    
    function loadSavedPlaylists() {
        const savedPlaylists = JSON.parse(localStorage.getItem('savedPlaylists')) || [];
        
        if (savedPlaylists.length === 0) {
            savedPlaylistsDiv.innerHTML = '<p>No playlists saved yet.</p>';
        } else {
            savedPlaylistsDiv.innerHTML = savedPlaylists.map(playlist => `
                <div class="playlist-item">
                    <h3>${playlist.name}</h3>
                    <ul>
                        ${playlist.songs.map(song => `<li>${song}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }
    }

    
    if (savedPlaylistsDiv) {
        loadSavedPlaylists();  
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const savedPlaylists = JSON.parse(localStorage.getItem('savedPlaylists')) || [];

    
    function loadSavedPlaylists() {
        const savedPlaylistsDiv = document.getElementById('saved-playlists');
        if (savedPlaylists.length === 0) {
            savedPlaylistsDiv.innerHTML = '<p>No playlists saved yet.</p>';
        } else {
            savedPlaylistsDiv.innerHTML = savedPlaylists.map((playlist, index) => `
                <div class="playlist-item">
                    <h3>${playlist.name}</h3>
                    <button class="open-playlist-btn" data-index="${index}">Open Playlist</button>
                </div>
            `).join('');
        }
    }

    
    if (document.getElementById('saved-playlists')) {
        loadSavedPlaylists();

        
        document.querySelectorAll('.open-playlist-btn').forEach(button => {
            button.addEventListener('click', function() {
                const playlistIndex = button.getAttribute('data-index');
                
                
                localStorage.setItem('selectedPlaylistIndex', playlistIndex);
                
                
                window.location.href = 'playlist-details.html';
            });
        });
    }

    
    function loadSelectedPlaylist() {
        const playlistIndex = localStorage.getItem('selectedPlaylistIndex');
        const selectedPlaylist = savedPlaylists[playlistIndex];

        if (selectedPlaylist) {
            
            document.getElementById('playlist-title').textContent = selectedPlaylist.name;

            
            const songList = document.getElementById('playlist-songs');
            songList.innerHTML = selectedPlaylist.songs.map(song => `<li>${song}</li>`).join('');
        } else {
            document.getElementById('playlist-title').textContent = "Playlist not found!";
        }
    }

    if (document.getElementById('playlist-songs')) {
        loadSelectedPlaylist();
    }
});
