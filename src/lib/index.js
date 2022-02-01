import React from 'react';
import PropTypes from 'prop-types';

// context
import ContextProvider, {UsePS} from './context/';

// hooks
import {useCountdown} from './hooks/'

// styles
import {styled} from './styles'

// snippets
import InternalHtml from './snippets/InternalHtml/'


const VideoContainer = styled.div(theme => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	overflow: 'hidden',

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
	}, [PS.state.loaded])


  return (
		<div>
			<InternalHtml />
			<VideoContainer id="player" />
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

const ContextRoot = (props) => (
	<ContextProvider>
		<ModuleRoot {...props} />
	</ContextProvider>
)

export default ContextRoot
