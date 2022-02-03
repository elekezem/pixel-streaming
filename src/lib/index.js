import React from 'react';
import PropTypes from 'prop-types';

// context
import ContextProvider, {UsePS} from './context/';

// hooks
import {useCountdown} from './hooks/'

// styles
import {styled} from './styles'

// snippets
import DebugData from './snippets/DebugData/'; export {DebugData}


const VideoContainer = styled.div(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	overflow: 'hidden',
	'&[data-loaded="false"]': {
		pointerEvents: 'none',
		visibility: 'hidden',
	},
	'& > video': {
		height: '100%',
		width: '100%',
		objectFit: 'cover',
		backgroundSize: 'cover',
	},
}))

const Content = styled.div(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	pointerEvents: 'none',
	'& > *': {
		display: 'inline-block',
		pointerEvents: 'all',
	},
	// '& [data-click="true"], button, input, select, checkbox': {
	// 	pointerEvents: 'all',
	// }
}))


const ModuleRoot = (props) => {
	const PS = UsePS()

	const Countdown = useCountdown({
		seconds: props.secondsToStart,
		onProgress: payload => props.onProgress(payload)
	})

	const PS_LOADED = PS.state.loaded

	const [debugPanel, setDebugPanel] = React.useState(true)

	React.useEffect(() => {

		if(!document.getElementById("playerUI")) {
			setDebugPanel(false)
		}

		setTimeout(() => { // Delay for preparing debug panel
			PS.cls.init({
	      host: props.host,
	      port: props.port,
	      onRestart: () => props.onRestart(),
	    })
		}, 300)

  }, [])

	React.useEffect(() => {
		props.onLoad()
		Countdown.stop()
	}, [PS_LOADED])

	const refClass = new class {
		constructor() {}

		emit({type, value, verification_id=undefined} = {}) {
			if(!PS_LOADED) {
				console.error('Command not executed, stream not loaded yet.', {type, value, verification_id});
				return ;
			}

			PS.cls.client.emit({type, value, verification_id})
		}
	}

	const contextClass = new class {
		constructor() {}

		get state() {
			return PS.state;
		}
	}

	// The component instance will be extended
	// with whatever you return from the callback passed
	// as the second argument

	React.useImperativeHandle(props.innerRef, () => refClass);


  return (
		<>
			<VideoContainer data-loaded={PS_LOADED} id="player" />
			<Content>
				{!debugPanel && <DebugData show={false} />}
				{props.children(contextClass)}
			</Content>
    </>
	)

};

ModuleRoot.propTypes = {
	children: PropTypes.func.isRequired,
	host: PropTypes.string.isRequired,
	port: PropTypes.number,
	onRestart: PropTypes.func,
	onLoad: PropTypes.func,
	secondsToStart: PropTypes.number.isRequired,
};

ModuleRoot.defaultProps = {
	children: () => {},
	onRestart: () => {},
	onLoad: () => {},
	onProgress: () => {},
	host: undefined,
	port: 80,
	secondsToStart: 0,
};

export default React.forwardRef((props, ref) => (
	<ContextProvider>
		<ModuleRoot {...props} innerRef={ref} />
	</ContextProvider>
))
