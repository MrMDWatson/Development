const example = `# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n      return multiLineCode;\n   }\n }\n\`\`\`\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**.\n\nThere's also [links](https://www.freecodecamp.org), and\n\>Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

//const example2 = `Heres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`\n`;

//const example3 = `// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n      return multiLineCode;\n   }\n }\n\`\`\`\n\n`;

//const example4 = `You can also make text **bold**... whoa!\n
//Or _italic_.\n
//Or... wait for it... **_both!_**.\n\n
//There's also [links](https://www.freecodecamp.org), and
//\>Block Quotes!\n\n`;

//const example5 = `- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n`;

//const example6 = `![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_isecondary.svg)`;

const data = {
  title: "Markdown Previewer",
  text: example
}

export { data };