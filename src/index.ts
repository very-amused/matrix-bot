import { MatrixClient } from 'matrix-bot-sdk'
import { homeserver, token } from './token.json'

// Create the bot client
const client = new MatrixClient(homeserver, token)

// Main function is used for readability, must be async so await can be used
async function main(): Promise<void> {
  try {
    client.start()
  } catch (err) {
    console.error('Error starting client ' + err) // Log an error message, console is a JS global used for printing to stdout
    process.exit(1) // Process is a NodeJS global, it does not need to be imported
  }
  console.log('Bot is now running')
}
main()