import SpotifyWebApi from '../../../'

const spotifyApi = new SpotifyWebApi()
spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN)

  ; (async () => {
    const me = await spotifyApi.getMe()
    console.log(me)
  })().catch((e) => {
    console.error(e)
  })

