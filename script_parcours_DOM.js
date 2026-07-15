// Question 1: number of <p> elements
console.log("Question 1 :", document.getElementsByTagName("p").length);

// Question 2: text of the element with the "hello" id
console.log("Question 2 :", document.getElementById("hello").textContent);

// Question 3: URL of the third link (index 2 because indexes start at 0)
console.log("Question 3 :", document.getElementsByTagName("a")[2].href);

// Question 4: number of elements with the "count-me" class
console.log("Question 4 :", document.getElementsByClassName("count-me").length);

// Question 5: number of <li> elements with the "count-me" class
console.log("Question 5 :", document.querySelectorAll("li.count-me").length);

// Question 6: number of <li class="count-me"> elements inside an <ol>
console.log("Question 6 :", document.querySelectorAll("ol li.count-me").length);

// Question 7: first <li> in the second <ul> located inside the <div>
console.log("Question 7 :", document.querySelector("div ul:nth-of-type(2) li:first-child").textContent);
