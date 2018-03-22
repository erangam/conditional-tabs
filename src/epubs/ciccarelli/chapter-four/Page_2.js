import React from 'react';
import AudioControl from '../AudioControl';
import imageOne from '../images/comment.png'

const PageTwo = props => {
	return (
		<div className="animated fadeIn">
			<section className="bodymatter">
				<div>
					<header><h1 className="title" id="P700101207800000000000000000AD3B" data-uri="M04_CICC7961_05_SE_C04.xhtml#P700101207800000000000000000AD3B" >What Is Consciousness?</h1></header>
					<AudioControl src="https://mediaplayer.pearsoncmg.com/assets/_audio.true/audio-mypsychlab-ciccarelli_0134450728-ciccarelli5_ch4mod1" />
					<blockquote className="extract">
						<p>
							<img alt="Small text bubble" height={13} width={12} src={imageOne} /> What exactly is meant by the term <i>consciousness</i>? I’ve heard it a lot, but I’m not sure that I know everything it means.</p>
					</blockquote>
					<p id="P700101207800000000000000000AD3E" data-uri="M04_CICC7961_05_SE_C04.xhtml#P700101207800000000000000000AD3E"><i>Consciousness</i> is one of those terms that most people think they understand until someone asks them to define it. Various sorts of scientists, psychologists, neuroscientists, philosophers, and even computer scientists (who have been trying to develop an artificial intelligence for some time now) have tried to define consciousness, and so there are several definitions—one for nearly every field in which consciousness is studied.</p>
				</div>
			</section>
		</div>
	);
};

export default PageTwo;
