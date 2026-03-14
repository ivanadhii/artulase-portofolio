import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vsddgaxj',
    dataset: 'production'
  },
  studioHost: 'artulase',
  deployment: {
    autoUpdates: true,
    appId: 'g5u3wkezsjnvcmac0l1ydoe7',
  }
})
