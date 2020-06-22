import React, { useEffect } from "react";
import styles from "./ContentPage.module.css";
import { TimelineMax, Power2 } from "gsap";

const ContentPage = props => {
  // useEffect(() => {
  //   var tl = new TimelineMax();

  //   tl.staggerFrom(
  //     "button",
  //     0.8,
  //     {
  //       opacity: 0
  //     },
  //     0.2
  //   );

  //   tl.staggerFrom(
  //     "h2",
  //     0.8,
  //     {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power2.easeInOut
  //     },
  //     0.5,
  //     "-=1"
  //   );

  //   tl.staggerFrom(
  //     "span",
  //     0.5,
  //     {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power2.easeInOut
  //     },
  //     0.2,
  //     "-=1"
  //   );

  //   tl.staggerFrom(
  //     "p",
  //     1,
  //     {
  //       opacity: 0,
  //       y: -40,
  //       ease: Power2.easeInOut
  //     },
  //     0.8,
  //     "-=1"
  //   );
  // });
  return (
    <section id="pages_section" className={styles.pages_section}>
      <button
        onClick={props.click}
        id="back_content_switch"
        className={styles.back_content_switch}
      >
        GO BACK
      </button>
      <div className={styles.content}>
        <h2 className="heading">Lorem Waldy</h2>
        <span className="tagline">
          Distilling design and other interesting methods
        </span>
        <div className={styles.paragraphs}>
          <p>
            It was not child's play tackling those horses. Some of the
            kind-hearted station folk in the backblocks had sent down some wild
            warrigals of the West; bucking brumbies that beat the band; old
            outlaws off the grass that the station hands could never master. But
            Colonel Cox ("Fighting Charlie" we called him) had in his command
            some of the crack rough-riders of Australia. And it was a joy to see
            these men tackle the outlaws. There were Crouch of Wagga, McDonald
            of Barrington, Whiteley of Wellington, Bullock of Melbourne,
            Sievewright of Gunnedah, Kennedy of Gloucester, Rex Moffatt of
            Goulburn, Harry Heath of Moree, and a score of others. Nearly every
            man in the regiment could sit a buck, or puff nonchalantly at his
            pipe while his mount pigrooted merrily. So when the wild horses were
            led forth there were hundreds volunteering for the honour of riding
            the rebels. One after another the horses were saddled up, and while
            the regiment cheered itself hoarse, there was enacted again and
            again the old-time struggle for mastery. There were plunging and
            reefing and rooting and sidling and rearing and bucking, as the
            panting chargers swung this way and that in vain endeavour to
            dislodge the riders. But the bush boys stuck to the saddles as the
            Old Man of the Sea stuck to Sindbad the Sailor, and one after
            another the bucking brumbies were broken and led away.
          </p>
          <p>
            But even a plague of locusts does not last for ever—and Egypt does.
            Egypt the wonderful! Egypt the kaleidoscopic! No, gentle reader, do
            not waste your sympathies on us. It was tiresome work, marching,
            training—training for the front, which for months never seemed to
            get any nearer, and some of "the boys"—those of them who were
            "spoiling for a fight," as the saying is—used at times to kick over
            the traces and paint the town vermilion; but there are compensations
            in Egypt for all who would seek them. What did it matter that we had
            no hot cross buns for Easter, no hard-boiled eggs, no ling, no
            salmon? We had omelettes and quail on toast, and chicken and curry
            and strawberries (no cream) and oranges and custard and jelly and
            Turkish coffee and Nile fish and pancakes and fritters and iced
            butter and beautiful jam and marmalade—and cigars. So we managed to
            get "a snack," you see. And I know that I, for one, had no desire
            just then to swap places with any man in Australia.
          </p>
          <p>
            It was night when we got back to camp. Oh, those Egyptian nights!
            The winter cold has gone, and spring is in the air. The nights are
            fine and fair, clear and cloudless, with the moon pure silver. The
            reflections in the Nile are just wonderful. The huge date palms
            stand out sharply from a star-spangled sky that somehow has a tint
            of green in its blue. One thinks of the Arabian Nights. The very
            street scenes make one think of them. Motors glide up and down the
            streets with rich Syrians, Greeks, Egyptians, Italians, Frenchmen
            and Englishmen, going to the Continental, or to Shepheard's, or to
            private entertainments. It is a gorgeous splash of colour. They had
            no motor-cars that I remember in those old Arabian Nights, but the
            magic of the thing and the colour of it all were surely much the
            same. And the roads of Egypt—how beautiful they are!—clean and
            smooth as a billiard table. Are there any finer roads in the whole
            world than the Mena road and that to Heliopolis? Fifty miles an hour
            is easy. I sometimes shudder now when I recall the races that we
            used to have along those roads at night, crying "Egre!
            Egre!"—Faster! Faster!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentPage;
