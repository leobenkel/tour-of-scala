import {
  useEffect,
  useState,
} from 'react'

import {
  readStorage,
  writeStorage,
} from './local-storage'


const discordServerID = "745529127720714310"
const url = 'https://discordapp.com/api/servers/' + discordServerID + '/widget.json'

export default function useDiscordLink() {
    const [discordLink, setDiscordLink] = useState('')

    useEffect(() => {
        const readLink = readStorage('discord-link', '')

        if (!readLink) {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    writeStorage('discord-link', json.instant_invite, 12)
                    setDiscordLink(json.instant_invite)
                })
        } else {
            setDiscordLink(readLink)
        }
    }, [])

    return discordLink
}
