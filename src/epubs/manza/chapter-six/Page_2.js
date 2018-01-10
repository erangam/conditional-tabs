import React from 'react';
import AudioControl from '../AudioControl';
import imageOne from '../images/AAKUODE0.jpg';
const PageTwo = props => {
	return (
		<div className="animated fadeIn">
			<section className="bodymatter">
				<header data-chaucer-element-id="51cbf1af-c351-43a9-9b35-972c627dd458">
					<h1
						data-chaucer-element-id="cfe326bb-ec60-4c4b-bfa1-899fa7f53ff6"
						className="title"
					>
						6.1 What is Culture?
					</h1>
				</header>
				<section className="objectiveset">
					<ol className="objectivelist dynamiclist">
						<li className="objective">
							<p>
								<span className="number">LO 6.1:</span>Analyze culture from a
								sociological perspective.
							</p>
						</li>
					</ol>
				</section>
				<AudioControl src="https://mediaplayer.pearsoncmg.com/assets/_audio.true/audio-mysoclab-manza_0134636821-manza2_ch6mod1" />
				<figure
					data-chaucer-element-id="99db5df8-af81-4fa6-8e74-dc92ed7c1087"
					className="informalfigure"
				>
					<img
						data-chaucer-element-id="9bb8ef18-a69f-4153-b20d-22723c17e7c6"
						src={imageOne}
						alt="Shows the Rolling Thunder parade on Memorial Day, motorcyclists riding on the road. People gathered on the roadside are waving the American flag."
					/>
				</figure>
				<section
					data-chaucer-element-id="4d5b61f1-f536-468b-a6b8-a5504716822d"
					className="level2"
				>
					<header data-chaucer-element-id="eac40d17-6e51-43fe-bb35-60063ff24200">
						<h1
							data-chaucer-element-id="89a32f30-c1b5-4b5e-b562-a7a44c3f0015"
							className="title"
							data-chaucer-note-id={227746}
						>
							The Many Meanings of Culture
						</h1>
					</header>
					<figure
						data-chaucer-element-id="dfb49f0a-b292-448c-b6f2-4dfa2d638543"
						className="video"
					>
						<header data-chaucer-element-id="1356bb58-83fd-486d-b607-89a1b5398534">
							<h1
								data-chaucer-element-id="515ebf14-a7db-4187-ae8e-faaa2feee641"
								className="title"
							>
								<span
									data-chaucer-element-id="824c0a61-d68e-4be8-8c32-bd7c13caf4f5"
									className="label"
								>
									Big Question 6.1
								</span>
							</h1>
						</header>
						<div
							data-chaucer-element-id="673f5472-3966-489f-a3d1-c5084e384afe"
							className="lc_ec_videoinner"
						>
							<iframe
								data-chaucer-element-id="e8bc92f2-3871-43d6-9154-6a4f907f54c7"
								id="player1"
								name="player1"
								className="__embedpearsonvideoplayer__"
								title="video"
								src="https://mediaplayer.pearsoncmg.com/assets/_video.true/mysoclab-NYU_sociology_project_2_0-bq_what_is_culture"
								scrolling="no"
								allowFullScreen="yes"
								width={640}
								height={480}
								seamless="seamless"
							/>
						</div>
					</figure>
					<p data-chaucer-element-id="a570174b-5f3a-4af0-8e4a-7c776337de01">
						The latest song by Beyoncé, a performance of the opera, our
						assumptions about monogamy, a series of posts on Twitter, a headline
						in the newspaper, the reason one person sleeps in and another wakes
						up early: These are all examples of culture. People use the word{' '}
						<span
							data-chaucer-element-id="e02b953a-06a3-47c3-893b-bee4eb14b201"
							className="emphasis"
						>
							culture
						</span>{' '}
						to refer to all sorts of things, from art to traditions to
						individual learned behavior. In everyday language, culture is often
						a synonym for art or artistic activities, as indicated by the
						expression “getting some culture,” or a synonym for refined taste,
						as when we call a person “cultured.” These are certainly two of the
						ways that sociologists use the word, but there are a number of
						others. In fact, as one writer puts it, “culture is one of the two
						or three most complicated words in the English language” (Williams
						1976:87).
					</p>
					<p data-chaucer-element-id="e39ade71-3280-403f-b219-ba675388c800">
						The modern Western history of the concept of culture begins with the
						rise of world travel in the eighteenth and nineteenth centuries,
						when merchants from Europe came into contact with non-Europeans for
						the first time. These merchants were struck not only by the physical
						differences between themselves and the non-Europeans but also by the
						differences in how they behaved. This included everything from how
						they dressed to the way their families were organized. In an attempt
						to make sense of these differences, scientists in the nineteenth
						century connected the physical differences with the behavioral
						differences, arguing that people’s biology—and particularly their
						race—determined how their societies were organized.
					</p>
					<p data-chaucer-element-id="be3ccd92-4d9a-4810-93ec-45b6c0efd2cd">
						Toward the end of the nineteenth century, anthropologists began to
						criticize this idea and instead argued that it was not race that was
						responsible for these differences but something else—something that
						was not hereditary but rather learned, something that was not
						natural and biological but rather socially produced. That something
						was culture. These days, the argument that the differences between
						groups of people are more than just biological, and that we learn
						how to behave, seems obvious. But at the time, it was an important
						discovery.
					</p>
					<p data-chaucer-element-id="d4deeff2-86d4-464f-b007-b3b176d45ee0">
						From this early research came some basic conclusions about culture.
						First, culture is a characteristic not of individuals but of groups.
						Second, culture is a way of understanding differences between groups
						and similarities within groups. Last, culture is an aspect of social
						life that is different from nature or biology. Indeed, what makes
						culture a social phenomenon is precisely that it is not natural.
						While it’s difficult in practice to draw a line between nature and
						culture, sociologists now recognize that certain biological things
						about humans are relatively constant throughout history (for
						example, everyone gets hungry), while cultural things are not (for
						example, the kind of food we eat and how we eat it).
					</p>
				</section>
			</section>
		</div>
	);
};

export default PageTwo;
