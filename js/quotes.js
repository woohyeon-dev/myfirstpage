// 12 wise sayings
const quotes = [
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
        translation: "더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워하지 마라.",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martin Luther King Jr.",
        translation: "날지 못하면 달려라. 달리지 못하면 걸어라. 그리고 걷지 못하면 기어라, 당신이 무엇을 하든 앞으로 가야 한다는 것만 명심해라.",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison",
        translation: "우리의 최대의 약점은 포기다. 성공으로 가는 가장 확실한 방법은 언제든지 한번 더 시도해보는 것이다.",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
        translation: "나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공하는 이유이다.",
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author: "Reid Hoffman",
        translation: "자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하고 있는 사람들과 어울리는 것이다.",
    },
    {
        quote: "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you 're not doing a tour of gas stations.",
        author: "Tim O'Reilly",
        translation: "돈은 자동차 여행의 휘발유 같은 것이다. 여행 중에 휘발유가 떨어지는 것을 원치 않지만, 주유소를 위한 여행을 하고 있는 것은 아니다.",
    },
    {
        quote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        author: "Jim Rohn",
        translation: "무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
        translation: "성공으로 가는 길과 실패로 가는 길을 거의 같다.",
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
        translation: "창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        translation: "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
        translation: "성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다.",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
        translation: "노력 전에 성공이 나오는 곳은 사전뿐이다.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
const translation = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
translation.innerText = todaysQuote.translation;