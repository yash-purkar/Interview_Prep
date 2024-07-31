// This is the updated version of question3

function parseData(data) {
  // some operation
  return data;
}

class User {
  constructor(name, data) {
    const parsedData = parseData(data);

    this.name = name;
    this.data = parsedData;
  }

  getData() {
    return this.data;
  }
}

const yash = new User("Yash", {
  youtubeChannel: "www.youtube.com/yash",
  shouldSubscribe: true,
});

// What would be the output of following statement?
console.log(yash.getData());
