// // Homework Part 2 (a): Prompt the user for their name
// user_name = window.prompt("Please enter your name", "Type your name here");
//
// // Homework Part 2 (b): Replace the header text with the user’s name
// // Grab the header element from index.html
// const header = document.querySelector("#header h1");
// // Replace its text content
// header.textContent = "Hello, welcome " + user_name + "!";
function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";
//A prompt box is used to prompt users to input a value before entering a page
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";
    return message;
}
document.write(welcome());

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row = 0; row < 2; row++)
  {
    document.write("<tr>");
    for (var column = 0; column < 3; column++)
    {
      document.write("<td>" + row + "," + column + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
