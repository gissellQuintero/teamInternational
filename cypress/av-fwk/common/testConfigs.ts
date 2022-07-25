const qaConfig = {
  baseUrl: "https://uat.digital.airline.amadeus.com/av/booking",
  // add configs to be overridden or set
};
const localhostConfig = {
  baseUrl: "localhost",
  // add configs to be overridden or set
};

export function overrideConfigs(platform: string): any {
  if (platform) {
    if (platform === "qa") {
      return qaConfig;
    } else if (platform === "localhost") {
      return localhostConfig;
    }
  }
}
