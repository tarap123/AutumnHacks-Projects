/* .js files add interaction to your website */
var quoteList = [ 
   "The First Computer Weighed More Than 27 Tons.",
  "Only about 10% of the world’s currency is physical money, the rest only exists on computers.",
   "Hackers Write About 6,000 New Viruses Each Month",
  "There are more than 5000 new computer viruses are released every month.",
   "The First Gigabyte Drive Cost $40,000",
   "A Single Computer Catches 50% of all Wikipedia Vandalism",
  "Computers Sort 95% of Mail",
  "About 90% of the World’s Currency Only Exists on Computers",
  " The First Computer Mouse was Made of Wood",
  "The First Known Computer Programmer was a Woman",
  "People Blink Less When They Use Computers",
  "The Parts for the Modern Computer Were First Invented in 1833",
  ];

  var myBtn = document.getElementById ("MotivateButton");

  var quote = document.getElementById ("quote");

  var count = 0;

  myBtn.addEventListener("click", displayQuote);

  function displayQuote(){
    quote.innerHTML = quoteList[count]; 
    count++;
    if (count == quoteList.length){
      count = 0;
    }
  }


