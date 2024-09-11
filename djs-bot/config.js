// Allows for .env files to be imported and used
require('dotenv').config()

// exporting the module allows for other files to see all the properties in this file as a single object
module.exports = {
	/**
	 * Name of the bot 
	 * @type {string} */
	name: "Helix Music",
	/**
	 * Database option (mongodb, postgresql) https://www.prisma.io/docs/reference/database-reference/connection-urls
	 * @type {string} */
	database: process.env.DATABASE || "postgresql",
	/** 
	 * URL to the preferred database (Prisma ORM)
	 * @type {string} */
	db_url: process.env.DATABASE_URL || "",

	/**
	 * Secret information, use the ENV file to store these values if possible
	 */
	/**
	 * UID for the Admin(s) of the bot  
	 * @type {string | string[]} */
	ownerId: process.env.DEVUID || ["AdminID"],
	/** 
	 * Token for bot login
	 * @type {string} */
	token: process.env.TOKEN || "",
	/** 
	 * ID of the bot
	 * @type {string} */
	clientId: process.env.CLIENTID || "",
	/** 
	 * Secret Token for bot login
	 * @type {string} */
	clientSecret: process.env.CLIENTSECRET || "",

	/**
	 * API configuration
	 */
	api: {
		/**
		 * Port to run the API on
		 * @type {number} */
		port: parseInt(process.env.API_PORT) || 8080,
	},

	/**
	 * WS configuration
	 */
	ws: {
		/**
		 * Port to run WS on
		 * @type {number} */
		port: parseInt(process.env.WS_PORT) || 3000,
	},

	/**
	 * Lavalink configuration
	 */
	// Lavalink server; optional public lavalink -> https://lavalink-list.darrennathanael.com/
	// Or host one yourself -> https://github.com/lavalink-devs/Lavalink
	//--> https://blog.darrennathanael.com/post/how-to-lavalink/
	/** 
	 * Music engine to use
	 * @type {keyof typeof import("./lib/clients/MusicClient").Engine} */
	musicEngine: "Erela",

	/** 
	 * Nodes to connect to
	 * @type {import("erela.js").Node[]} */
	nodes: [
		{
			identifier: "Main Node",
			host: "v3.lavalink.rocks",
			port: 80,
			password: "horizxon.tech",
			retryAmount: 200,
			retryDelay: 40,
			secure: false,
		},
		{
			identifier: "Backup Node 2",
			host: "lavalinkv3-id.serenetia.com",
			port: 80,
			password: "BatuManaBisa",
			retryAmount: 200,
			retryDelay: 40,
			secure: false,
		},
		{
			identifier: "Backup Node 3",
			host: "lavalink-legacy.jompo.cloud",
			port: 2333,
			password: "jompo",
			retryAmount: 200,
			retryDelay: 40,
			secure: false,
		},
	],

	/** 
	 * Invite URL parameters
	 */
	/** 
	 * Scopes to request for the bot
	 * @type {import("discord.js").OAuth2Scopes[]}
	 */
	scopes: ["bot", "applications.commands"],

	/** 
	 * Bot oauth scopes
	 * @type {import("discord.js").OAuth2Scopes[]}
	 */
	oauth2Scopes: ["identify", "guilds"],

	/** 
	* Permissions to request for the bot
	* @type {import("discord.js").PermissionResolvable | bigint} 
	* @see https://discord.com/developers/docs/topics/permissions#permissions
	*/
	permissions: 0, // 8 = Administrator, 0 = Doesn't need permissions (uses slash commands)

	/**
	 * Other parameters used variously throughout the bot
	*/
	/** 
	 * Debug mode for the bot
	 * 
	 * 0 = No debug logging (production), 1 = Standard Logging (debug info), 2 = Development (everything)
	 * @type {number} */
	OPLevel: 1,

	/**
	 * Color of the embeds (can also be hex)
	 * @type {import('discord.js').ColorResolvable} */
	embedColor: "#39f962",

	/** 
	 * PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
	 */
	presence: {
		/** 
		 * online, idle, dnd, invisible, ...
		 * @type {import("discord.js").PresenceStatus} */
		status: "online",

		/**
		 @type {{
			name: string,
			type: import("discord.js").ActivityType,
			data?: (client: import("./lib/Bot")) => { [key: string]: any }
		 }[]}
		 */
		activities: [
			{
				name: "{someVariable} servers",
				type: "WATCHING",
				data: (client) => {
					return {
						someVariable: client.guilds.cache.size,
					}
				}
			},
			{
				name: "Music",
				type: "LISTENING",
			}
		],
	},

	/** 
	 * This icon will be in every embed's author field, if you don't want it, just leave it blank or "undefined"
	 * @type {string} */
	iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif",

	defaultPlayerValues: {
		twentyFourSeven: false,
		autoLeave: false,
		autoPause: true,
		autoQueue: false,
		history: false,
	}
};
