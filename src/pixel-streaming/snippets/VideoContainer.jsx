import React from 'react';

// context
import {ContextProvider} from '../context/';

// styles
import {styled} from '../styles'

// snippets
import InternalHtml from './InternalHtml/'


const VideoTag = styled.div(theme => ({
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


const VideoContainer = (props) => {

	return (
		<ContextProvider>
			<InternalHtml />
			<VideoTag id="player" />
			{props.children}
    </ContextProvider>
	)

};

export default VideoContainer
