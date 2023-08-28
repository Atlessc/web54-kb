[Support me on ku-fi](https://ko-fi.com/web54devco)
Demp: https://web54-kb.vercel.app/

# Knowledge Base Template Website

## Languages:
- html
- react
- Javascript
- css
- Markdown

## Summary
this was originally made for the Apple KB website for new iPhone users with [This table of content page],which had 695 pages in total so i cut it down to 71 for the important articles. i made this website to make it easier to navigate the KB website and to make it easier to find the articles you are looking for. i also made this website to make it easier to add new articles to the website without having to write a lot of code.

## Cloning the repository

When you do clone the repository, you will need to run `npm install` to install all the dependencies.

## Running the website locally

To run the website locally, you will need to run `npm start` to start the website on your local machine.

## Deploying the website

deploying the website is done through Vercel and you can look at the [Demo here](https://web54-kb.vercel.app/). the `vercel.json` file is already set up for you to deploy the website on your own Vercel account.

## Guide for the tool system

i create a custom tool system for the website to make it easier to add a table of content from the custom syntax that i created to JSON, which has a copy button for you to copy the code and paste it into the `/src/pages/articles.json` file.

here are the rules for the Table of Content syntax:

```
> = Section
>> = Subsection
>>> = Subsubsection
/ = Page
< = End of section
<< = End of parent section of the current section
```

the syntax is very simple and easy to use, it needs to start with a top leavel section `>` and then you can add subsections `>>` and subsubsections `>>>` and then you can add pages `/` and then you can end the section `<` and then you can end the parent section `<<` and then you can end the parent section of the parent section `<<<` and so on.

there is an error message that will show up if you have an error in the syntax, and it will tell you what the error is and where it is. **HOWEVER**, the error message is not perfect and it will not tell you the exact location of the error, but it will tell you the line number of the error, and will only tell you if you used a character that is not in the syntax, but not tell you if you have an empty seciton or if you tried making section into a page like `>>/` or `/>>`

the big issue i have seen with other using it and me using it is you have to track the sections and its children otherwise you may end up with structural issues with the table of content, and it will not show up correctly on the website.

here is an example of the syntax:

```
>Section1
/Page1
/Page2
/Page3
>>Section1.1
/Page4
/Page5
>>>Section1.1.1
/Page6
/Page7
< (back to Section1.1)
/Page8
/Page9
< (back to Section1)
/Page10
< (You can now add a new top level section)
```

you can go to the demo website and look at the table of content to see how it looks like on the website. and even copy the examle above and paste it into the coverter under `Tools` and look at the JSON output.

## Guide for the Converter code

There's going to be code you can customize for your own if you are wanting to use this as your own KB website. the first thing i would suggest is to look at the `src/components/TextToJSON.jsx` file and change part of the `const pageItem` code. 

```
else if (line.startsWith('/')) {
      const pageItem = {
        'pageID': `WD${pageID.toString().padStart(6, '0')}`, (<---- change this to your own page ID system)
        'pageTitle': line.slice(1).trim()
      };
```

You can change the `WD` to whatever you want, and you can change the `6` to whatever number you want, and you can change the `0` to whatever number you want. the `6` is the number of zeros that will be added to the page ID, so if you change it to `1` then it will add 1 zero to the page ID.

what i like to do is keep a txt file with the code using my cutom syntax system before converting to JSON so i can edit it later and add more pages and sections without writing so much code.

**ONE MORE THING**, do not change the field names like `pageID` or `pageTitle` or `SectionTitle` or `Items`, these are being called in the `ToCArticles.jsx` file to render the table of content. if you change the field names, then you will need to change the code in the `ToCArticles.jsx` file. and honestly i have no idea how to explain how to change the code in the `ToCArticles.jsx` file. i had Bing AI understand the syntax system and told to create a react component that take the custom synax code and convert it to JSON, and it did a good job at it.

if you want to contribute to improve anything please go to the contibuting section at the bottom.
## Routing

The routing is setup with the `App.jsx` being the routing file where every page including the articles can loading using `/articles/:id` and this is setup so you can just change the file file names to something else and it will still work.

For rendering the `articles.json` file, the file needs to be in the `pages` folder as i tried to put it in a `data` folder and it didn't work for some reason. you can clone it and send me an email if you know how to fix it.
`tyler@web54.dev`

## Adding new articles

Very easy, just create a new file in the public folder and name it using your custom name scheme. just make sure to update the Table of Content (`articles.json`) JSON file with the new page ID and page title.


## Contributing

you can clone it and send me an email if you know how to fix or improve something in the code. you can leave me some feedback as well if you want to.
`tyler@web54.dev`