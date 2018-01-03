// Stateless component boilerplate
import React from 'react';
import AudioControl from '../AudioControl';
import ImageOne from '../images/epub/PH_08_007.jpg';

const PageFourteen = props => {
	return (
		<div className="animated fadeIn">
			<section className="bodymatter">
				<section
					data-chaucer-element-id="88d2f2de-ee8b-4922-bafc-fcdc1734a4ed"
					id="P7001013171000000000000000003F82"
					className="level1"
					data-chaucer-note-id="329201"
				>
					<header data-chaucer-element-id="83b459f6-57e7-413b-aeef-28c440142a90">
						<h1
							data-chaucer-element-id="f6e37c2c-edc4-4c95-acf2-44e0c9b98f04"
							className="title"
							id="P7001013171000000000000000013D2B"
							data-uri="M08_FELD7654_04_SE_C08.xhtml#P7001013171000000000000000013D2B"
						>
							Personality Development
						</h1>
					</header>

					<section className="objectiveset">
						<ol className="objectivelist dynamiclist">
							<li className="objective">
								<p>
									<span className="lc_labelnum">
										<span className="label">LO</span>{' '}
										<span className="number">8.6</span>
									</span>{' '}
									Analyze personality development in middle adulthood.
								</p>
							</li>
						</ol>
					</section>
					<AudioControl src="https://mediaplayer.pearsoncmg.com/assets/_audio.true/audio-mypsychlab-feldman_0134531868-feldman4_ch8mod3sec1" />

					<aside
						data-chaucer-element-id="98bb7228-083d-420e-9629-43ac0619b192"
						id="P7001013171000000000000000003F84"
						className="vignette"
						data-uri="M08_FELD7654_04_SE_C08.xhtml#P7001013171000000000000000003F84"
					>
						<p
							data-chaucer-element-id="5d19927b-8ebd-4159-af47-c5fc05115f61"
							id="P7001013171000000000000000013D2C"
							data-uri="M08_FELD7654_04_SE_C08.xhtml#P7001013171000000000000000013D2C"
						>
							<i data-chaucer-element-id="eac83c6a-7da4-4c2b-98b4-bf62f756b44f">
								My 40th birthday was not an easy one. I did not wake up feeling
								different—that’s never been the case. But during my 40th year, I
								did come to realize the finiteness of life. The die was cast. I
								understood that I probably wasn’t going to be president of the
								United States—a secret ambition—or CEO of a major corporation.
								Time had become more of an adversary than an ally. But it was
								curious: My usual pattern of focusing on the future, planning
								each step, began to shift. I started appreciating what I had. I
								looked at my life and was pretty satisfied with some of my
								accomplishments. I began focusing on what was going right, not
								on what I was lacking. This didn’t happen in a day; it took
								several years after turning 40 before I felt this way. Even now,
								it is hard to fully accept that I am middle-aged.
							</i>
						</p>
					</aside>
					<figure
						data-chaucer-element-id="39ffe95b-834a-43b5-ac95-b0020f2df96e"
						className="informalfigure lc_img33"
					>
						<img
							data-chaucer-element-id="09c919ba-d430-4ae1-a983-ef5451c2d35b"
							height="300"
							width="364"
							alt="Shows a birthday cake decorated with stars, bow and candle saying “40”"
							id="P7001013171000000000000000013D2E"
							data-uri="P7001013171000000000000000006C95"
							src={ImageOne}
						/>
					</figure>

					<p
						data-chaucer-element-id="fc8f2f74-2c98-40f8-aa63-61e5b4a258ee"
						id="P7001013171000000000000000013D2F"
						data-uri="M08_FELD7654_04_SE_C08.xhtml#P7001013171000000000000000013D2F"
					>
						As this 47-year-old man suggests, realizing that one has reached
						midlife can be difficult. In many Western societies, age 40
						undeniably marks one as middle-aged—at least in the public eye—and
						suggests that one is on the threshold of a “midlife crisis.” How
						true this view is, as we’ll see, depends on your perspective.
					</p>
				</section>
			</section>
		</div>
	);
};

export default PageFourteen;
