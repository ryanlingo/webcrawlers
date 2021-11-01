const robotsParser = require("robots-parser");
const request = require("request-promise");

const robotsUrl = "https://en.wikipedia.org/robots.txt";

async function getRobotsText(robotsUrl) {
  const robotText = await request.get(robotsUrl);
  const robots = robotsParser(robotsUrl, robotText);
  console.log(
    robots.isAllowed(
      "https://en.wikipedia.org/wiki/Computer_science",
      "simpleBot"
    )
  );
  console.log(
    robots.isAllowed("https://en.wikipedia.org/wiki/Computer_science", "wget")
  );
}

getRobotsText(robotsUrl);
