import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "../plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();

  return (
    <>
      <article class="bigHeaders textCenter">
        <h1 class="visualHide"> Xtreme Xmas Code </h1>
        <p>
          Have you ever been savoring your Advent Of Code calendar, keyboard
          dusted with sugar cookie crumbles, reindeer curled at your feet, and
          found yourself wishing the puzzles were wilder? More challenging? MORE
          XTREME??
        </p>
        <p>Well ho-ho-hold that thought because this is the mod for you!</p>
        <p>
          <em>Xtreme Xmas Code</em> is a mod/companion app for{" "}
          <a href="https://adventofcode.com/" class="link">
            °Advent of Code°
          </a>
          , a delightful{" "}
          <a href="https://en.wikipedia.org/wiki/Advent_calendar" class="link">
            °Advent calendar°
          </a>{" "}
          of small programming puzzles created by{" "}
          <a href="http://was.tl/" class="link">
            °Eric Wastl°
          </a>
          . With it you can record your Advent of Code progress and each day get
          an additional modifier to that day's AoC puzzle. For example, you may
          be challenged to complete that day's puzzle using a language you've
          never used before, or without reassigning any variables.
        </p>
        <p>
          Additionally, the mod scores each game based on how you use your
          reroll tokens and provides leaderboards for ranking games based on
          this score. I hope this will provide a brain-stretching leaderboard
          experience{" "}
          <a
            href="https://www.reddit.com/r/adventofcode/comments/e2wjhf/comment/f90ksek/"
            class="link"
          >
            °that isn't tied to a strict time schedule°
          </a>
          .
        </p>
        <div>
          ----------------------------------------------------------------------------
        </div>
        <h2> About Me </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>
        <p>
          I'm{" "}
          <a href="https://www.kabeech.com/" class="link">
            °Kyle Beechly°
          </a>{" "}
          - web developer, language lover, and maker of Xtreme Xmas Code. I hope
          you like it! You can find me on{" "}
          <a href="https://github.com/kaBeech" class="link">
            °GitHub°
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/kyle-beechly/" class="link">
            °LinkedIn°
          </a>
          ,{" "}
          <a href="https://bsky.app/profile/kabeech.com" class="link">
            °Bluesky°
          </a>
          , and{" "}
          <a href="https://hachyderm.io/@kaBeech" class="link">
            °Mastodon°
          </a>
          .
        </p>
        <p>
          I'm also <em>#OpenToWork</em>, so if you're looking to work with a fun
          nerd you may contact me via one of the above options or{" "}
          <a href="mailto:contact@kabeech.com" class="link">
            °Email°
          </a>
          !
        </p>
        <p>
          If you'd like to support Xtreme Xmas Code, you can do so by sharing it
          with a friend, supporting our{" "}
          <a href="/support" class="link">
            °sponsors°
          </a>{" "}
          , or supporting{" "}
          <a href="https://adventofcode.com/support" class="link">
            °Eric Wastl°
          </a>
          , creator of Advent of Code. You can find more information on{" "}
          <a href="/support" class="link">
            °my support page°
          </a>
          .{" "}
        </p>
        <div>
          ----------------------------------------------------------------------------
        </div>
        <h2> Disclaimer </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <p>
          <em>Xtreme Xmas Code is under construction</em> and has not officially
          launched.
        </p>
        <p>
          I'm planning to enter a public Beta Testing phase in early November
          2023. Before then,{" "}
          <em>
            any data submitted to Xtreme Xmas Code is subject to modification or
            deletion without notice
          </em>
          . If you're eager to start using XXC for more permanent projects and
          it hasn't launched yet, please{" "}
          <a href="mailto:contact@kabeech.com" class="link">
            °send me an email°
          </a>{" "}
          and I'll see what I can do.
        </p>{" "}
        <div>
          ----------------------------------------------------------------------------
        </div>
        <h2> Rules </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <p>
          Each day you may roll a new <em>Challenge Modifier</em>. Our example
          Challenge Modifier will be{" "}
          <em class="bold textBright">
            "...using a random language from the Functional Programming Box."
          </em>
        </p>
        <p>
          Some Challenge Modifiers have additional <em>Modifier Options</em>.
          Our example Challenge Modifier has Modifier Options from the
          Functional Programming Language Box. If you roll a Challenge Modifier
          that has Modifier Options, a Modifier Option will be automatically
          rolled as well. Our example Modifier Option will be{" "}
          <em class="bold textBright">"Haskell."</em>
        </p>
        <p>
          Therefore the full text of our example Challenge Modifier including
          its Modifier Option will be{" "}
          <em class="bold textBright">
            "You must complete this challenge using this language from the
            Functional Programming Box: Haskell."
          </em>
        </p>
        <p>
          At the start of a new game you will be given 12 <em>Reroll Tokens</em>
          . You may spent 2 Reroll Tokens to reroll your Challenge Modifier. If
          your Challenge Modifier has a Modifier Option, you may spend 1 Token
          to reroll the Modifier Option.
        </p>
        <p>
          You will earn 1 Reroll Token whenever you complete Part 1 or Part 2 of
          a puzzle (i.e whenever you earn a Gold Star in Advent of Code).
        </p>
        <p>
          In our example, say we are in Day 1 and are dissatisfied with our
          Challenge Modifier. We decide to reroll our Modifier Option for one
          Reroll Token, giving us{" "}
          <em class="bold textBright">
            "You must complete this challenge using this language from the
            Functional Programming Box: Erlang."
          </em>
        </p>
        <p>
          We don't want to use Erlang either, so we choose to reroll the whole
          Challenge Modifier for 2 Reroll Tokens. This gives us{" "}
          <em class="bold textBright">
            "You must complete this challenge making declarations in a natural
            language not yet used in this codebase (e.g. Spanish)."
          </em>{" "}
          ¡Vamos!
        </p>
        <p>
          After completing Part 2 of Day 1 we have spent 3 Tokens and earned 2,
          which combined with the 12 we started with gives us 11 Reroll Tokens
          at the start of Day 2.
        </p>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <h2> Scoring </h2>{" "}
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <p>
          The <em>Basic Scoring Formula</em> is{" "}
          <code>
            {"{"}10 * T + 20 * P2 + B{"}"}
          </code>{" "}
          where <em class="bold textBright">T</em> is the number of{" "}
          <em class="bold textBright">unspent reroll Tokens</em>, <em>P2</em> is
          the number of{" "}
          <em class="bold textBright">tokens spent during Part 2</em> (up to a
          maximum of 2 per day), and <em class="bold textBright">B</em> is the{" "}
          <em class="bold textBright">end-of-game Bonus.</em>
        </p>
        <p>
          The <em>End-Game Bonus Formula</em> is{" "}
          <code>
            {"{"}300 - 10 * S{"}"}
          </code>
          , to a minimum of 0, where <em class="bold textBright">S</em> is the{" "}
          <em class="bold textBright">total number of tokens Spent.</em>
        </p>
        <p>
          If you spend at least 2 reroll tokens during Part 2 of every day, the{" "}
          <em>Virtuoso Scoring Formula</em> is used instead. It is{" "}
          <code>
            {"{"}1120 + 10 * T - 10 * P1{"}"}
          </code>{" "}
          where <em class="bold textBright">T</em> is the number of{" "}
          <em class="bold textBright">unspent reroll Tokens</em> and{" "}
          <em class="bold textBright">P1</em> is the number of{" "}
          <em class="bold textBright">tokens spent during Part 1.</em>
        </p>{" "}
        <p>
          Each day's individual score is a rough estimation of that day's effect
          on the overall score, assuming use of the Basic Scoring Formula. The{" "}
          <em>Day Score Formula</em> is{" "}
          <code>
            {"{"}10 * T + 20 * P2 - 10 * P1{"}"}
          </code>
          , where <em class="bold textBright">T</em> is the number of{" "}
          <em class="bold textBright">unspent reroll Tokens</em>,{" "}
          <em class="bold textBright">P2</em> is the number of{" "}
          <em class="bold textBright">tokens spent during Part 2</em> (up to a
          maximum of 2), and <em class="bold textBright">P1</em> is the number
          of <em class="bold textBright">tokens spent during Part 1</em>.
        </p>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <h2> Titles </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <p>
          Upon completing Day 25 of a game you will be awarded a <em>Title</em>{" "}
          based on your score. The titles are:
        </p>
        <ul>
          <li>
            0+ points: <em class="fsGreen">Champion</em>
          </li>
          <li>
            200+ points: <em class="fsTurquoise">Gnarly Champion</em>
          </li>
          <li>
            400+ points: <em class="fsCyan">Radical Champion</em>
          </li>
          <li>
            600+ points: <em class="fsCerulean">Righteous Champion</em>
          </li>
          <li>
            800+ points: <em class="fsBlue">Epic Champion</em>
          </li>
          <li>
            920+ points: <em class="fsPurple">Flawless Champion</em>
          </li>
          <li>
            1000+ points: <em class="fsRose">Legendary Champion</em>
          </li>
          <li>
            1120+ points: <em class="fsRed">Santaic Champion</em>
          </li>
          <li>
            1240+ points: <em class="fsYellow">Godlike Champion</em>
          </li>
        </ul>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <h2> Public Links </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <p>
          You can generate a <em>Public Link</em> to share your work with the
          world by marking your game as Public. TBA...
        </p>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <h2> Frequently Asked Questions </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>
        <p>
          <em>
            I find the text on the site hard to read. Is there a high contrast
            mode?
          </em>
        </p>
        <p>
          There will be a high contrast alternate stylesheet. Firefox supports
          these by default (View -{">"} Page Style -{">"} High Contrast).
        </p>
        <p>
          <em>Are you affiliated with Advent of Code?</em>
        </p>
        <p>Nope!</p>
        <p>
          I'm a big fan of{" "}
          <a href="https://adventofcode.com/" class="link">
            {" "}
            °Advent of Code°
          </a>{" "}
          and I encourage you to support its creator{" "}
          <a href="https://adventofcode.com/support">°Eric Wastl°</a>, but I'm
          not affiliated with him or Advent of Code in any way.
        </p>
        <p>
          <em>Why make a mod for Advent of Code?</em>
        </p>
        <p>
          Because it's fun! Using randomized challenges to push our boundaries
          and encourage us to think outside the box is a great way to help keep
          our brains in shape!
        </p>
        <p>
          Additionally, XXC adds to AoC leaderboard options. Being a worldwide
          speed-based competition, the race to get on{" "}
          <a href="https://adventofcode.com/leaderboard" class="link">
            °Advent of Code's°
          </a>{" "}
          global leaderboard{" "}
          <a
            href="https://adventofcode.com/2022/about#faq_compete"
            class="link"
          >
            °encourages°
          </a>{" "}
          <a href="https://blog.vero.site/post/advent-leaderboard" class="link">
            °some°
          </a>{" "}
          <a
            href="https://kevinyap.ca/2019/12/going-fast-in-advent-of-code/"
            class="link"
          >
            °particular°
          </a>{" "}
          <a
            href="https://gist.github.com/mcpower/87427528b9ba5cac6f0c679370789661"
            class="link"
          >
            °techniques°
          </a>{" "}
          and{" "}
          <a
            href="https://adventofcode.com/2022/about#faq_unlocktime"
            class="link"
          >
            °isn't convenient for all players' schedules°
          </a>
          . I'm hoping that the score-based Xtreme Xmas Code leaderboards will
          provide an accessible alternative that rewards new learning, courage,
          and lateral thinking.
        </p>
        <p>
          <em>How do the leaderboards work?</em>
        </p>
        <p>
          The leaderboards are opt-in; you must post your game manually for it
          to show up. Games on the boards are ranked by score. There are two
          boards for each year: In-Season and All-Time. To qualify for the
          In-Season board, your game must be completed and posted during the
          specified year. For example, to qualify for the 2023 In-Season board
          your game must be completed and posted before January 1, 2024.
        </p>
        <p>
          <em>How can I post to the leaderboards?</em>
        </p>
        <p>
          To post a game to the leaderboards, you must first mark your game as
          Public and add a Repository Link. TBA... If you mark your game as
          Private or remove its Repository Link, it will automatically be
          removed from the leaderboards. TBA...
        </p>
        <p>
          <em>Can I use AI to get on the leaderboards?</em>
        </p>
        <p>
          Please don't post games that use AI to do most or all of your puzzle
          solving to the leaderboards. The leaderboards are built on a principle
          of good faith and I would like them to remain useful as a way for
          humans to interact and compete with each other. That being said, mild
          use of AI tools is permitted and some challenge modifiers may even
          require the use of AI. Just use your best judgement and be a good
          sport =)
        </p>
        <p>
          <em>How do you deter cheating? </em>
        </p>
        <p>
          We use a community-based reputation system and focus on showing our
          work as players. Each game posted to the leaderboards must include a
          link to a public repository showing the code used to solve each
          puzzle. Players can upvote and downvote games on the leaderboards to
          either affirm or question their integrity. If a game has 5 or more
          downvotes and less upvotes than downvotes, the game will by default
          not be shown on the leaderboards (this setting can be changed in the
          filter section). I may also review and hide or remove games manually.
        </p>
        <p>
          To downvote a game you must include the reason you consider the game
          invalid or dishonest. If your game gets hidden and you feel this is
          unjust, you may submit a petition for me to verify your game. Any
          player who I feel is abusing the leaderboards, including the voting
          and petitions process, may be subject to revocation of privileges,
          including being banned from voting in or posting to the leaderboards.
        </p>
        <p>
          <em>How does authentication work?</em>
        </p>
        <p>
          Xtreme Xmas Code uses{" "}
          <a href="https://en.wikipedia.org/wiki/OAuth" class="link">
            °OAuth°
          </a>{" "}
          to verify and remember your identity. You choose a service like{" "}
          <a
            onClick$={() => {
              signIn.submit({
                providerId: "github",
              });
            }}
            class="link"
          >
            °GitHub°
          </a>{" "}
          to log in with and Xtreme Xmas Code receives information to remember
          who you are. This is generally public information; here are examples
          from{" "}
          <a href="https://api.reddit.com/user/reddit/about" class="link">
            °Reddit°
          </a>{" "}
          and{" "}
          <a href="https://api.github.com/users/octocat" class="link">
            °GitHub°
          </a>
          . Xtreme Xmas Code will remember your unique ID, names, URL, and image
          from the service you use to authenticate.
        </p>
        <div>
          ----------------------------------------------------------------------------
        </div>{" "}
        <h2> Credits </h2>
        <div>
          ----------------------------------------------------------------------------
        </div>
        <p>
          Xtreme Xmas Code:{" "}
          <a href="https://www.kabeech.com/" class="link">
            °Kyle Beechly°
          </a>
        </p>
        <p>
          Advent of Code:{" "}
          <a href="http://was.tl/" class="link">
            °Eric Wastl°
          </a>
        </p>
        <p>XXC Beta Testing:</p>
        <ul>
          <li>
            -{" "}
            <a
              href="mailto:contact@kabeech.com?subject=Xtreme%20Xmas%20Beta%20Testing"
              class="link"
            >
              °Your name here!°
            </a>
          </li>
        </ul>
        <p>Playing: You!</p>
      </article>
    </>
  );
});
