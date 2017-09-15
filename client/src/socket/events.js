module.exports = {
	SYSTEM: {
		ATTEMPT_REGISTER: 'ATTEMPT_REGISTER',
		SUCCESS_REGISTER: 'SUCCESS_REGISTER',
		FAILURE_REGISTER: 'FAILURE_REGISTER'
	},
	CLIENT: {
		ATTEMPT_LOGIN: 'ATTEMPT_LOGIN',
		SUCCESS_LOGIN: 'SUCCESS_LOGIN',
		FAILURE_LOGIN: 'FAILURE_LOGIN'
	},
	INTERNAL: {
		GET_USER: 'GET_USER',
		GET_USERS: 'GET_USERS',
		GET_USER_SUCCESS: 'GET_USER_SUCCESS',
		GET_USER_FAILURE: 'GET_USER_FAILURE',
		CREATE_USER: 'CREATE_USER',
		CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
		CREATE_USER_FAILURE: 'CREATE_USER_FAILURE',
		DELETE_USER: 'DELETE_USER',
		DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
		DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',

		GET_BOARD: 'GET_BOARD',
		GET_BOARDS: 'GET_BOARDS',
		GET_BOARD_SUCCESS: 'GET_BOARD_SUCCESS',
		GET_BOARD_FAILURE: 'GET_BOARD_FAILURE',
		CREATE_BOARD: 'CREATE_BOARD',
		CREATE_BOARD_SUCCESS: 'CREATE_BOARD_SUCCESS',
		CREATE_BOARD_FAILURE: 'CREATE_BOARD_FAILURE',
		DELETE_BOARD: 'DELETE_BOARD',
		DELETE_BOARD_SUCCESS: 'DELETE_BOARD_SUCCESS',
		DELETE_BOARD_FAILURE: 'DELETE_BOARD_FAILURE',

		GET_LIST: 'GET_LIST',
		GET_LISTS: 'GET_LISTS',
		CREATE_LIST: 'CREATE_LIST',
		CREATE_LIST_SUCCESS: 'CREATE_LIST_SUCCESS',
		CREATE_LIST_FAILURE: 'CREATE_LIST_FAILURE',
		MODIFY_LIST: 'MODIFY_LIST',
		MODIFY_LIST_SUCCESS: 'MODIFY_LIST_SUCCESS',
		MODIFY_LIST_FAILURE: 'MODIFY_LIST_FAILURE',
		DELETE_LIST: 'DELETE_LIST',
		DELETE_LIST_SUCCESS: 'DELETE_LIST_SUCCESS',
		DELETE_LIST_FAILURE: 'DELETE_LIST_FAILURE',

		GET_CARD: 'GET_CARD',
		GET_CARDS: 'GET_CARDS',
		CREATE_CARD: 'CREATE_CARD',
		CREATE_CARD_SUCCESS: 'CREATE_CARD_SUCCESS',
		CREATE_CARD_FAILURE: 'CREATE_CARD_FAILURE',
		MODIFY_CARD: 'MODIFY_CARD',
		MODIFY_CARD_SUCCESS: 'MODIFY_CARD_SUCCESS',
		MODIFY_CARD_FAILURE: 'MODIFY_CARD_FAILURE',
		COMPLETE_CARD: 'COMPLETE_CARD',
		COMPLETE_CARD_SUCCESS: 'COMPLETE_CARD_SUCCESS',
		COMPLETE_CARD_FAILURE: 'COMPLETE_CARD_FAILURE',
		DELETE_CARD: 'DELETE_CARD',
		DELETE_CARD_SUCCESS: 'DELETE_CARD_SUCCESS',
		DELETE_CARD_FAILURE: 'DELETE_CARD_FAILURE',

		GET_MEMBER: 'GET_MEMBER',
		GET_MEMBERS: 'GET_MEMBERS',
		ASSIGN_MEMBER: 'ASSIGN_MEMBER',
		REMOVE_MEMBER: 'REMOVE_MEMBER',

		GET_CARD_ACTIVITY: 'GET_CARD_ACTIVITY',
		ADD_CARD_ACTIVITY: 'ADD_CARD_ACTIVITY'
	},
	ERROR: {
		USER_NONE: `No logged-in user, please login.`,
		USER_NO_ID: `No user id supplied`,
		USER_NO_OPTIONS: `No parameters supplied for GET_USERS event.`,
		USER_EXISTS: `Unable to register you because a user with that name already exists.`,
		USER_NOT_EXISTS: `User does not exist.`,

		BOARD_NO_ID: `No board id supplied`,
		BOARD_NO_OPTIONS: `No parameters supplied for GET_BOARDS event.`,
		BOARD_NO_NAME: `You must supply a name when creating a board.`,
		BOARD_EXISTS: `Unable to create board because a board with that name already exists.`,
		BOARD_NOT_EXISTS: `Board does not exist.`,
		BOARDS_NOT_FOUND: `No boards found matching that criteria`,

		LIST_NO_ID: `No list id supplied`,
		LIST_NO_OPTIONS: `No parameters supplied for GET_LISTS event.`,
		LIST_NO_NAME: `You must supply a name when creating a list.`,
		LIST_EXISTS: `Unable to create list because a list with that name already exists.`,
		LIST_NOT_EXISTS: `List does not exist.`,
		LISTS_NOT_FOUND: `No list found matching that criteria`,

		CARD_NO_ID: `No card id supplied`,
		CARD_NO_OPTIONS: `No parameters supplied for GET_CARDS event.`,
		CARD_NO_NAME: `You must supply a name when creating a card.`,
		CARD_EXISTS: `Unable to create card because a card with that name already exists.`,
		CARD_NOT_EXISTS: `List does not exist.`,
		CARD_NOT_FOUND: `No card found matching that criteria`
	},
	SUCCESS: {
		CREATE_BOARD: `Successfully created board.`,
		DELETE_BOARD: `Successfully deleted board.`,

		CREATE_LIST: `Successfully created list.`,
		MODIFY_LIST: `Successfully modified list.`,
		DELETE_LIST: `Successfully deleted list.`,

		CREATE_CARD: `Successfully created card.`,
		MODIFY_CARD: `Successfully modified card.`,
		DELETE_CARD: `Successfully deleted card.`
	}
};