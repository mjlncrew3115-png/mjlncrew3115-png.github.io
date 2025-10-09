// // Homework Part 2 (a): Prompt the user for their name
// user_name = window.prompt("Please enter your name", "Type your name here");
//
// // Homework Part 2 (b): Replace the header text with the user’s name
// // Grab the header element from index.html
// const header = document.querySelector("#header h1");
// // Replace its text content
// header.textContent = "Hello, welcome " + user_name + "!";
var webmaps = [
  ["<a href='https://worldview.earthdata.nasa.gov/' target='_blank'>NASA Earthdata Worldview</a>",
    "https://worldview.earthdata.nasa.gov/", "The primary purpose of NASA Earthdata Worldview is to let users explore global satellite imagery and environmental data in near real time. Its strengths are that it provides free access to scientific satellite data and has many layers of information, but its weakness is that the large amount of data can be overwhelming for casual users. It offers GIS functionality such as layering, time-series visualization, and geographic search. The application is designed for researchers, educators, and policy makers who need access to satellite data. The user interface is powerful but can feel complex, and I would redesign it to make the menus and data layers a bit easier to navigate."],

  ["<a href='https://apps.nationalmap.gov/viewer/' target='_blank'>USGS National Map</a>",
    "https://apps.nationalmap.gov/viewer/", "The primary purpose of the USGS National Map is to provide access to topographic maps and geospatial data of the United States. Its strengths are that it is government-backed and reliable, while its weakness is that it loads slowly and looks dated compared to newer applications. It offers GIS functionality such as topographic visualization, download of spatial data, and measurement tools. The application is designed for researchers, students, and the public who want detailed geographic data of the U.S. The user interface works but is not very modern, and I would redesign it to be faster and more visually appealing."]
];

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
  for (var row = 0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column = 0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
