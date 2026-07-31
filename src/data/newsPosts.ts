export interface NewsPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	sources: string[];
	content: string;
}

export const newsPosts: NewsPost[] = [
	{
		id: "19fb5e54",
		title: "The AI Fund That Predicted the Boom—Then Got Wiped Out By It",
		excerpt: "A hedge fund that returned 400%+ betting on the AI boom just got forced to sell its entire portfolio — here's what happened, and what it teaches about leverage.",
		date: "July 30, 2026",
		readTime: "2 min read",
		sources: [],
		content: `
		<h3>What happened</h3>
		<p>Leopold Aschenbrenner left OpenAI's safety team in 2024, wrote a widely-read essay called "Situational Awareness" arguing the world was underestimating how fast AI was coming, and then started a hedge fund by the same name to bet on it.</p>
		<p>For a while, he looked like a genius. The fund's strategy was straightforward: go big on companies building AI infrastructure (chipmakers, data centers, energy providers), while betting against software companies he thought AI would disrupt. It worked spectacularly—the fund reportedly returned over 400% in the first half of 2026 and grew to as much as $45 billion.</p>
		<p>Then in July, it flipped. Some of the fund's largest holdings, like the Korean memory-chip maker SK Hynix, dropped sharply, while several of the software stocks it had bet against went up instead. A double hit.</p>
		<p>The fund was also reportedly using about 4x leverage—meaning it had borrowed heavily to size up its bets. When the trade turned, that leverage meant a bad month became a crisis: the fund's banks (Bank of America, Goldman Sachs, and JPMorgan) demanded more cash to cover the losses. Unable to raise it fast enough, Situational Awareness was forced to sell off essentially its entire public stock portfolio in a rushed deal, with Ken Griffin's Citadel buying the lot.</p>
		<p>Notably, just days before the forced sale, Aschenbrenner had written to investors calling the selloff "some of the most attractive opportunities" he'd seen, and asked them to send more money. Nobody did in time. The fund kept one thing: a roughly $5 billion private stake in Anthropic, which wasn't part of the fire sale. The firm will keep operating, just no longer as an active public-markets hedge fund.</p>

		<h3>What it means</h3>
		<p>Almost immediately after the forced selling, many of the stocks Situational Awareness had been forced to dump bounced back. Which is the ironic part of this story: the fund's read on AI infrastructure demand doesn't look wrong. It wasn't beaten by a bad idea—it was beaten by how much borrowed money was riding on a good one.</p>
		<p>That distinction matters because it separates two very different failures people often lump together: being wrong about the future, and being unable to survive the path to being right. Aschenbrenner's fund suffered the second kind. The thesis may well still play out. It just won't be his fund benefiting from it.</p>

		<h3>What you learn</h3>
		<p>You don't need to care about hedge funds to get the lessons here:</p>
		<p>Being right isn't the same as surviving. A correct long-term call can still wipe you out if you're too leveraged to survive the short-term noise along the way.</p>
		<p>Crowded trades unwind violently. When a lot of money piles into the same bet, a small move against it can cascade fast, because everyone's forced to sell at the same time.</p>
		<p>Lenders don't wait for you to be proven right. Margin calls run on their own clock. Conviction doesn't pay off a loan.</p>
		<p>Situational Awareness isn't the first fund to learn this the hard way, and it won't be the last. But it's a strikingly clean example, precisely because the underlying thesis held up—it was the leverage, not the idea, that broke.</p>
		<p>Note: details of this story are still emerging based on reporting from outlets including CNBC, Bloomberg, and the Financial Times; some specifics may be updated as more information comes out.</p>
    `
  	}
];
