import { ContentfulClient } from 'react-contentful';

//CONNECT TO CONTENTFUL
export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});
//making it an async function to make sure a process w/in the functions runs before moving on
//use to to get navigation entry
//means dont execute next line until this line fulfils
    //getEntry allows you to put in the id of an entry and get all the data from that
export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('85uz9aoxK9dXyxnOoYRsN');
    return data;
}

//getting the homepage and sections
export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry({entryId:'7f3SRcrmKp8vZR1archhoG', include: 3});
    return data
}

export const getContentfulProjects = async () => {
    const data = await contentfulClient.getEntries({content_type:'project'});
    return data
}
