const playlists = [
  {
      id: 1,
      name: "Rock Classics",
      tags: ["rock", "classic"],
      songs: [
          { title: "Stairway to Heaven", year: 1971, artist: "Led Zeppelin", album: "IV" },
          { title: "Bohemian Rhapsody", year: 1975, artist: "Queen", album: "A Night at the Opera" },
          { title: "Hotel California", year: 1976, artist: "Eagles", album: "Hotel California" }
      ]
  },
  {
      id: 2,
      name: "Pop Hits",
      tags: ["pop", "hits"],
      songs: [
          { title: "Thriller", year: 1982, artist: "Michael Jackson", album: "Thriller" },
          { title: "Like a Prayer", year: 1989, artist: "Madonna", album: "Like a Prayer" },
          { title: "Blinding Lights", year: 2020, artist: "The Weeknd", album: "After Hours" }
      ]
  },
  {
      id: 3,
      name: "Jazz Essentials",
      tags: ["jazz", "instrumental", "classic"],
      songs: [
          { title: "So What", year: 1959, artist: "Miles Davis", album: "Kind of Blue" },
          { title: "Take Five", year: 1959, artist: "Dave Brubeck", album: "Time Out" },
          { title: "My Favorite Things", year: 1961, artist: "John Coltrane", album: "My Favorite Things" }
      ]
  }
];

module.exports = {

  //GET playlist /playlists
  index : (req, res) => {
    res.json(playlists);
  },

  //GET playlist by id /playlists/:id
  show : (req, res) => {
    const { id } = req.params

    const playlist = playlists.find(playlist => playlist.id === +id)

    if (!playlist) {
      res.status(404)
      res.json({ message: "Playlist not found!" })
    } else {
      res.json(playlist)
    }
  },

  //POST add playlist(alone or with music)
  create : (req, res) => {
    const {name, tags, songs} = req.body

    if (!name && !tags) {
      res.status(400)
      res.json({ message: "Playlist name and tags are required!" })
    }

    if (songs) {
      playlists.push({
        id: playlists.length + 1,
        name : name,
        tags : tags,
        songs : songs
      }
    )
    res.json(playlists[playlists.length - 1])
      } else {
        playlists.push({
          id: playlists.length + 1,
          name: name,
          tags: tags
        })
      res.json(playlists[playlists.length - 1])
    }
  },

  //PUT update name and tags list
  updatePlay : (req, res) => {
    const { id } = req.params

    const {name, tags} = req.body
    const playlistIndex = playlists.findIndex(i => i.id === +id)

    if (playlistIndex === -1) {
      res.status(404).json({message : "playlist not found"})
    }

    if (typeof name === 'string') {
      playlists[playlistIndex].name = name
    }
    if (tags) {
      playlists[playlistIndex].tags = tags
    }

    res.json(playlists[playlistIndex])
  },

  //DELETE delete playlist 

  deletePlay : (req, res) => {
    const { id } = req.params
    const playlistIndex = playlists.findIndex(i => i.id === +id)

    if (playlistIndex === -1) {
      res.status(404).json({message : "playlist not found"})
    }

    playlists.splice(playlistIndex, 1)

    res.status(204).end()
  },

  //POST add music
  addMusic : (req, res) => {
    const {id} = req.params
    const {title, year, artist, album} = req.body

    const playlistIndex = playlists.findIndex(i => i.id === +id)

    if (playlistIndex === -1) {
      res.status(404).json({message : "playlist not found"})
    }

    if (!title & !year & !artist & !album) {
      res.status(400).json({message : "invalid music data"})
    }

    playlists[playlistIndex].songs.push({
      title,
      year,
      artist,
      album
    })

    res.json(playlists[playlistIndex])
  },

  //DELETE delete music 
  deleteMusic: (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const playlistIndex = playlists.findIndex(i => i.id === +id);

    if (playlistIndex === -1) {
        return res.status(404).json({ message: "Playlist not found" });
    }

    const songIndex = playlists[playlistIndex].songs.findIndex(song => song.title === title);

    if (songIndex === -1) {
        return res.status(404).json({ message: "Song not found" });
    }

    playlists[playlistIndex].songs.splice(songIndex, 1);
    res.status(204).end();
}

}

