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


const VideoContainer = styled.div(theme => ({
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

const ModuleRoot = (props) => {
	const PS = UsePS()

	const Countdown = useCountdown({
		seconds: props.secondsToStart,
		onProgress: payload => props.onProgress(payload)
	})

	const PS_LOADED = PS.state.loaded

	React.useEffect(() => {

    PS.cls.init({
      host: props.host,
      port: props.port,
      onRestart: () => props.onRestart(),
    })

  }, [])

	React.useEffect(() => {
		props.onLoad()
		Countdown.stop()
	}, [PS_LOADED])

	const cls = new class {
		constructor() {
			this.state = PS.state
		}

		emit({type, value, verification_id=undefined} = {}) {
			PS.cls.client.emit({type, value, verification_id})
		}
	}

	// The component instance will be extended
	// with whatever you return from the callback passed
	// as the second argument

	React.useImperativeHandle(props.innerRef, () => cls);


  return (
		<div>
			<VideoContainer data-loaded={PS_LOADED} id="player" />
			{props.children}
    </div>
	)

};

ModuleRoot.propTypes = {
	host: PropTypes.string.isRequired,
	port: PropTypes.number.isRequired,
	onRestart: PropTypes.func,
	onLoad: PropTypes.func,
	secondsToStart: PropTypes.number.isRequired,
};

ModuleRoot.defaultProps = {
	onRestart: () => {},
	onLoad: () => {},
	onProgress: () => {},
	secondsToStart: 0,
};

export default React.forwardRef((props, ref) => (
	<ContextProvider>
		<ModuleRoot {...props} innerRef={ref} />
	</ContextProvider>
))
