import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout'
import { getContentfulNav } from './Queries/index';
import * as headings from './Styles/type'; //this can be import * as type too, whatever makes sense
import HomepageSections from './Components/HomepageSections';
import Footer from './Components/Footer';

function App() {

  //function that will update the state, only has 2 variable -> data is the value of the state, and setData is a specific method used to update that data, set it equal to useState and set this to the original data
  let [data, setData] = useState({});


  const getData = async () => {
    const theData = await getContentfulNav();
    setData(theData);
  }


  //similar to componentDidMount
  useEffect(() => {
    getData()
  }, [])


  if (data.fields) {
    return (
      <Layout>
        {/* <h1>{data.fields.websiteTitle}</h1> */}
        <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
        {/* <h2>{data.fields.websiteSubtitle}</h2> */}
        <headings.HeaderTwo larger>
          {data.fields.websiteSubtitle}
        </headings.HeaderTwo>
        <headings.BannerImage>
          <img src={data.fields.bannerImage.fields.file.url} alt={data.fields.bannerImage.fields.title} />
        </headings.BannerImage>
        <HomepageSections />
        {/* <footer>
          <div>
            Email me: <a href={`mailto:${data.fields.email}`}>{data.fields.email}</a>
          </div>
          <div>
            <a href={data.fields.github} target="_blank" rel="noopener noreferrer">Github</a> |
            <a href={data.fields.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> |
            <a href={data.fields.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer> */}
        <Footer data={data} />
      </Layout>
    )
  }

  //if data doesn't show - so at first it'll show loading, then componentDidMount and use effects will happen then will show fields
  return <Layout>...loading</Layout>
}

export default App;
