import Events from '../../socket/events';
export default { ...Events };

const { REDUCERS, SYSTEM, CLIENT, INTERNAL } = Events;

/* SYSTEM ACTIONS */
const attemptRegister = () => ({ type: SYSTEM.ATTEMPT_REGISTER });
const successRegister = data => ({
	type: SYSTEM.SUCCESS_REGISTER,
	data
});
const failureRegister = err => ({ type: SYSTEM.FAILURE_REGISTER, err });

export const register = options => async dispatch => {
	dispatch(attemptRegister());

	if (!options.socket) {
		dispatch(failureRegister({ error: 'No socket to utilize' }));
	}

	const socket = options.socket;
	delete options.socket;

	try {
		// Emit the register event and pass the data.
		socket.emit(SYSTEM.ATTEMPT_REGISTER, options);
	} catch (err) {
		dispatch(failureRegister(err));
	}
};

/* CLIENT ACTIONS */
const attemptLogin = () => ({ type: CLIENT.ATTEMPT_LOGIN });
const successLogin = data => ({ type: CLIENT.SUCCESS_LOGIN, data });
const failureLogin = err => ({ type: CLIENT.FAILURE_LOGIN, err });

export const login = options => async dispatch => {
	dispatch(attemptLogin());

	if (!options.socket) {
		dispatch(failureLogin({ error: 'No socket to utilize' }));
	}

	const socket = options.socket;
	delete options.socket;

	socket.on(CLIENT.SUCCESS_LOGIN, data => {
		dispatch(successLogin(data));
		socket.off(this);
	});

	socket.on(CLIENT.FAILURE_LOGIN, err => {
		dispatch(failureLogin(err));
		socket.off(this);
	});

	try {
		// Emit the register event and pass the data.
		socket.emit(CLIENT.ATTEMPT_LOGIN, options);
	} catch (err) {
		dispatch(failureLogin(err));
	}
};

export const clearLoginError = () => {
	console.log('clearing');
	return {
		type: INTERNAL.CLEAR_ERROR,
		reducer: REDUCERS.LOGIN
	};
};
