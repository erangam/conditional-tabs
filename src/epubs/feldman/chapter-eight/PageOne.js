// Stateless component boilerplate
import React from 'react';
import AudioControl from '../AudioControl';

const PageOne = props => {
	return (
		<div className="revel">
			<div className="chapter">
				<section className="bodymatter">
					<header>
						<h1 className="title">Chapter 8 Middle Adulthood</h1>
					</header>
					<AudioControl src="https://mediaplayer.pearsoncmg.com/assets/_pmd.true/feldman_0133814912_feldman_08_00?mimeType=mp3" />
					<section className="introduction level2">
						<aside className="vignette">
							<p>
								Terri Donovan, 50, raised five kids while working full time as
								an urban planner for the city of New York. “It was not a cushy
								job,” Terri says. “I raced about the city all day, and there
								were meetings almost every night. Zoning Board. Planning Board.
								I was lucky my husband Brian likes to cook.” Terri did her share
								of parenting, too. “I never missed a school play or band
								concert. I read the bedtime stories most nights. And we did
								everything together on the weekends, even the laundry.”
								Sometimes she felt she would “go nuts.” Yet, when her youngest
								child left home last year, she wandered around for 3 months,
								thinking “What next?”
							</p>

							<p>
								It was Brian who helped her figure out the answer. He booked a
								trip to Italy, their first real vacation in over a decade. “We
								went sightseeing and ate fabulous leisurely meals, but most of
								all we focused on being together.” Back home, she and Brian
								scheduled a weekly date night. “We finally have time for sex and
								long walks and Sunday brunch with the{' '}
								<span className="emphasis">New York Times</span>,” she says.
								Terri also started helping out one night a week at the local
								soup kitchen. “The people we serve have some interesting
								stories, and another way of looking at things. They’ve enriched
								my outlook.” The biggest change came when Terri decided to quit
								her job. “I wanted to help the people in my community,” she
								says. Now, she’s running for a seat in the state legislature.
								And her oldest daughter is pregnant. “When my kids left home, I
								realized they hadn’t been in the way of my life. They’d been the
								center of it,” Terri says. “So I’m looking forward to my
								grandchild—as long as my daughter and her family don’t move in.”
							</p>
						</aside>

						<p>
							<span className="strong">Middle adulthood</span> is a time of
							significant transitions. Grown children leave home. People change
							the way they view their career. Sometimes, they change careers
							entirely as Terri did. Marriages undergo reevaluation. Often,
							couples find this a period of strengthened ties, as the “empty
							nest” leaves them free for uninterrupted intimacy. But sometimes
							they divorce. Middle age is also a period of deepening roots.
							Family and friends ascend in importance as career ambitions begin
							to take a backseat. And there is more time for leisure activities.
						</p>
						<p>
							In this chapter, we first look at the physical changes of middle
							adulthood and how people cope with them. Then, we consider
							sexuality and menopause and debate the use of hormone replacement
							drugs for women. We also look at health issues that become of
							increasing concern in midlife.
						</p>

						<p>
							Next, we consider the changing intellectual abilities of
							middle-aged adults, and ask the question: Does intelligence
							decline over time? We investigate various types of intelligence
							and look at how each is affected by the aging process. We also
							look at memory. Finally, we look at social development and examine
							what changes and what remains stable over time in an adult’s
							personality. We consider the evidence for the so-called midlife
							crisis and discuss how family relationships change. We end by
							examining how people are spending their increased leisure time in
							middle age.
						</p>
					</section>

					<figure className="video">
						<header>
							<h1 className="title">
								<span className="label">Watch</span>
							</h1>
							<p className="subtitle">Sketchnote video: Middle Adulthood</p>
						</header>
						<div className="lc_ec_videoinner">
							<video
								controls="controls"
								preload="metadata"
								poster="https://mediaplayer.pearsoncmg.com/assets/_pmd.true/20140523_f3e_060_middle_adulthood?mimeType=jpg"
							>
								<source src="https://mediaplayer.pearsoncmg.com/assets/_pmd.true/20140523_f3e_060_middle_adulthood?mimeType=mpeg4&amp;size=640&amp;bitrate=600" />
								<p>Your browser doesn't support HTML5 video</p>
								<track
									src="../captions/20140523_f3e_060_middle_adulthood.vtt"
									srcLang="en"
									kind="captions"
									label="English"
									type="text/vtt"
									default=""
								/>
							</video>
						</div>
					</figure>

					<section className="objectiveset">
						<header>
							<h1 className="title">Modules</h1>
						</header>
						<ol className="objectivelist dynamiclist">
							<li className="objective">
								<a href="./page-two">
									<span className="number">8.1</span> Physical Development  in
									Middle Adulthood
								</a>
								<p>Do men experience the equivalent of menopause?</p>
							</li>
							<li className="objective">
								<a href="ch08_pg0006.xhtml">
									<span className="number">8.2</span> Cognitive Development  in
									Middle Adulthood
								</a>
								<p>Does intelligence decline in adulthood?</p>
							</li>
							<li className="objective">
								<a href="ch08_pg0009.xhtml">
									<span className="number">8.3</span> Social and Personality
									Development in Middle Adulthood
								</a>
								<p>The midlife crisis: reality or myth?</p>
							</li>
						</ol>
					</section>
				</section>
			</div>
		</div>
	);
};

export default PageOne;
