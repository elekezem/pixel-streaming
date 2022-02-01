import React from 'react';
import PropTypes from 'prop-types';

// styles
import {styled} from '../../styles'

// css
import "./section.module.css"

const RootDiv = styled.div(theme => ({
  width: 500,
  visibility: 'hidden',
  position: 'absolute',
  pointerEvents: 'none',
}))


const DebugPanel = (props) => {

  const renderDebug = () => {
		return (
			<div id="overlaySettings">
				<div id="KickOthers">
					<div className="settings-text">Kick all other players</div>
					<label className="btn-overlay">
						<input readOnly type="button" id="kick-other-players-button" className="overlay-button btn-flat" value="Kick" />
					</label>
				</div>
				<div id="FillWindow">
					<div className="settings-text">Enlarge Display to Fill Window</div>
					<label className="tgl-switch">
						<input readOnly type="checkbox" id="enlarge-display-to-fill-window-tgl" className="tgl tgl-flat" checked />
						<div className="tgl-slider"></div>
					</label>
				</div>
				<div id="QualityControlOwnership">
					<div className="settings-text">Quality control ownership</div>
					<label className="tgl-switch">
						<input readOnly type="checkbox" id="quality-control-ownership-tgl" className="tgl tgl-flat" />
						<div className="tgl-slider"></div>
					</label>
				</div>
				<div id="EncoderSettings">
					<div className="settings-text">Encoder Settings</div>
					<div id="encoderParamsContainer" className="collapse">
						<div className="form-group">
							<label htmlFor="encoder-rate-control" className="settings-text">Rate Control</label>
							<select id="encoder-rate-control" defaultValue="CBR">
								<option value="CBR">CBR</option>
								<option value="VBR">VBR</option>
								<option value="ConstQP">ConstQP</option>
							</select><br />
							<label htmlFor="encoder-target-bitrate-text">Target Bitrate (kbps)</label>
							<input readOnly type="number" className="form-control" id="encoder-target-bitrate-text" value="0" min="0" max="100000" /><br />
							<label htmlFor="encoder-max-bitrate-text">Max Bitrate (kbps)</label>
							<input readOnly type="number" className="form-control" id="encoder-max-bitrate-text" value="0" min="0" max="100000" /><br />
							<label htmlFor="encoder-min-qp-text">Min QP</label>
							<input readOnly type="number" className="form-control" id="encoder-min-qp-text" value="0" min="0" max="999" /><br />
							<label htmlFor="encoder-max-qp-text">Max QP</label>
							<input readOnly type="number" className="form-control" id="encoder-max-qp-text" value="0" min="0" max="999" /><br />
							<div className="settings-text">Filler Data</div>
							<label className="tgl-switch">
								<input readOnly type="checkbox" id="encoder-filler-data-tgl" className="tgl tgl-flat" />
								<div className="tgl-slider"></div>
							</label><br />
							<label htmlFor="encoder-multipass" className="settings-text">Multipass</label>
							<select id="encoder-multipass" defaultValue="DISABLED">
								<option value="DISABLED">DISABLED</option>
								<option value="QUARTER">QUARTER</option>
								<option value="FULL">FULL</option>
							</select><br />
							<input readOnly id="encoder-params-submit" className="btn btn-primary btn-lg mt-3" type="button" value="Apply" />
						</div>
					</div>
				</div>
				<div id="WebRTCSettings">
					<div className="settings-text">WebRTC Settings</div>
					<div id="webrtcParamsContainer" className="collapse">
						<div className="form-group">
							<label htmlFor="webrtc-degradation-pref">Degradation Pref</label>
							<select id="webrtc-degradation-pref">
								<option value="BALANCED">BALANCED</option>
								<option value="MAINTAIN_FRAMERATE">MAINTAIN_FRAMERATE</option>
								<option value="MAINTAIN_RESOLUTION">MAINTAIN_RESOLUTION</option>
							</select><br />
							<label htmlFor="webrtc-max-fps-text">Max FPS</label>
							<input readOnly type="number" className="form-control" id="webrtc-max-fps-text" value="1" min="1" max="999" /><br />
							<label htmlFor="webrtc-min-bitrate-text">Min Bitrate (kbps)</label>
							<input readOnly type="number" className="form-control" id="webrtc-min-bitrate-text" value="0" min="0" max="100000" /><br />
							<label htmlFor="webrtc-max-bitrate-text">Max Bitrate (kbps)</label>
							<input readOnly type="number" className="form-control" id="webrtc-max-bitrate-text" value="0" min="0" max="100000" /><br />
							<label htmlFor="webrtc-low-qp-text">Low QP Threshold</label>
							<input readOnly type="number" className="form-control" id="webrtc-low-qp-text" value="0" min="0" max="999" /><br />
							<label htmlFor="webrtc-high-qp-text">High QP Threshold</label>
							<input readOnly type="number" className="form-control" id="webrtc-high-qp-text" value="0" min="0" max="999" /><br />
							<input readOnly id="webrtc-params-submit" className="btn btn-primary btn-lg mt-3" type="button" value="Apply" />
						</div>
					</div>
				</div>
				<div id="ShowFPS">
					<div className="settings-text">Show FPS</div>
					<label className="btn-overlay">
						<input readOnly type="button" id="show-fps-button" className="overlay-button btn-flat" value="Toggle" />
					</label>
				</div>
				<div id="MatchViewportResolution">
					<div className="settings-text">Match Viewport Resolution</div>
					<label className="tgl-switch">
						<input readOnly type="checkbox" id="match-viewport-res-tgl" className="tgl tgl-flat" />
						<div className="tgl-slider"></div>
					</label>
				</div>
				<div id="Stats">
					<div className="settings-text">Show Stats</div>
					<label className="tgl-switch">
						<input readOnly type="checkbox" id="show-stats-tgl" className="tgl tgl-flat" checked />
						<div className="tgl-slider"></div>
					</label>
					<div id="statsContainer" className="statsContainer">
						<div id="stats" className="stats"></div>
					</div>
				</div>
				<div id="LatencyTest">
					<button onClick={() => {
						// logic.player.cls.sendStartLatencyTest()
					}}>Test Latency</button>
					<div id="LatencyStatsContainer" className="statsContainer">
						<div id="LatencyStats" className="stats">No stats yet...</div>
					</div>
				</div>
			</div>
		)
	}

  return (
		<RootDiv>
	    <div id="playerUI">
	      <div id="overlay" className="overlay text-light bg-dark">
	        <div>
	          <div id="qualityStatus" className="greyStatus">●</div>
	          <div id="overlayButton">+</div>
	        </div>
	        {renderDebug()}
	      </div>
	    </div>
		</RootDiv>
  );

}


export default DebugPanel
