let temp = [];
let root = {
  createMessage: (args) => {
    const { id, author, content,to } = args;
    temp.push(({id, author, content, to}));
    return `success create ${author}'s message to ${to}`;
  },
  getMessage: () => {
    return temp;
  }
};

module.exports = root;