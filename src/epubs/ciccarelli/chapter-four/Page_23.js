import React from 'react';
import AudioControl from '../AudioControl';

const PageTwentyThree = props => {
	return (
		<div className="animated fadeIn">
			<section className="bodymatter">

				<div>
					<header><h1 className="title" id="P700101207800000000000000000B1AC" data-uri="M04_CICC7961_05_SE_C04.xhtml#P700101207800000000000000000B1AC"><span className="label">Chapter Summary </span></h1></header>
					<AudioControl src="https://mediaplayer.pearsoncmg.com/assets/_audio.true/audio-mypsychlab-ciccarelli_0134450728-ciccarelli5_ch4mod8" />

					<figure className="gadget" id="summary">
						<header>
							<h1 className="title">
								<span className="label">Chapter Summary</span>
							</h1>
							<p className="subtitle">Consciousness</p>
						</header>
						<div className="lc_iframeinner">
							<iframe className="gadget" src="https://revelpreview.pearson.com/epubs/cic/OPS/components/metrodigi/ch04-tabs_accordions_v2-01/index.html" height={580} width={770} lang="en" title="Chapter Summary - Concsciousness" data-responsivedesigned="no" data-minwidth={770} data-minheight={530} data-lmsrequired="no" data-offlinesupport="yes" data-displaytarget="embed" />
						</div>
					</figure>
					<figure className="gadget" id="key-terms">
						<header>
							<h1 className="title">
								<span className="label">Key Terms</span>
							</h1>
							<p className="subtitle">Consciousness</p>
						</header>
						<div className="lc_iframeinner">
							<iframe className="gadget" src="https://revelpreview.pearson.com/epubs/cic/OPS/components/metrodigi/ch04-advanced_flashcards_v3-01/index.html" height={580} width={770} lang="en" title="Key Terms - Consciousness" data-responsivedesigned="no" data-minwidth={770} data-minheight={530} data-lmsrequired="no" data-offlinesupport="yes" data-displaytarget="embed" />
						</div>
					</figure>
				</div>
			</section>
		</div>
	);
};

export default PageTwentyThree;
