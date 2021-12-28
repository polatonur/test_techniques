function domainName(url) {
  console.log(url);
  if (url.match("www")) {
    return url.split("www")[1].split(".")[1];
  } else if (url.match("//")) {
    return url.split("//")[1].split(".")[0];
  } else {
    return url.split(".")[0];
  }
}

console.log(domainName("http://www.google.com"));
