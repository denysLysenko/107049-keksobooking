'use strict';

const colors = require(`colors`);

const allCommands = [
  require(`./about`),
  require(`./fill`),
  require(`./generate`),
  require(`./server`),
  require(`./version`)
];

const listAll = () => {
  return `${allCommands
    .map((command) => colors.grey(command.alias) + ` — ` + colors.green(command.description))
    .join(`\n`)}`;
};

module.exports = listAll;
