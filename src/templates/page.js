import React from 'react'
import Avatar from '../components/Avatar/Avatar'

var remark = require('remark');
var html = require('remark-html');

export default ({ data }) =>
    <div>
        <h1>{data.page.title}</h1>
        <AuthorList authors={data.page.author} />
        <BodyText markdown={data.page.body.body} />
        <AuthorAvatars authors={data.page.author} />
    </div>

export const query = graphql`
query PageQuery ($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {            
        title
        slug
        body {
            body
        }
        author {
            name
            gitHubUsername
        }
    }            
}
`
const AuthorList = ({ authors }) => authors && // "short circuit" null check
    <div>
        <em> By {authors.map((author, i, arr) =>
            <span> {author.name}{delimitAuthors(i, arr)} </span>)}
        </em>
        <br />
        <br />
    </div>

const delimitAuthors = (index, array) => {
    if (index === array.length - 1) return "";
    if (index === array.length - 2) return " and ";
    return ",";
}

const AuthorAvatars = ({ authors }) => authors && // "short circuit" null check
    <div>
        <h3> Find {getPronoun(authors)} on GitHub </h3>
        {authors.map((author) => <Avatar user={author.gitHubUsername} key={author.name} />)}
    </div>

const getPronoun = (authors) => authors.length > 1 ? "us" : "me"

const BodyText = ({ markdown }) =>
    <div dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }} />

const parseMarkdown = (markdown) =>
    remark().use(html).processSync(markdown).toString();