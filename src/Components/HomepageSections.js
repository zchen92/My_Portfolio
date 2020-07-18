import React, {useState, useEffect} from 'react';
import { getContentfulHomepage } from '../Queries/index';
import RichText from './RichText'
import ProjectThumbnails from './ProjectThumbnail';
import { GridContainer, PullQuote, Section} from '../Styles/layout';
import { HeaderTwo, BodyText } from '../Styles/type';
import { uuid } from 'uuidv4'

const HomepageSections = () => {
    const [data,setData] = useState({});

    //method to get data, async function
    const getData = async () => {
        const theData = await getContentfulHomepage();
        setData(theData);
    }

    //invokes getData, the empty array tells useEffect to run once and to not rerun again, otherwise, unlike componentDidMount, this will keep running and each time the component updates, it will run, and go into an infinite loop
    useEffect(()=>{
        getData();
    }, []);

    //if this object data (in an array form) exists, then do this -
    console.log(data)
    if (Object.entries(data).length >0) {
        return(
            //look in console to see how to drill down
            <main>{data.fields.homepageSections.map((section)=>{
                const {sectionTitle, textContent, projects } = section.fields;
                return(
                    <Section key={uuid()}>
                        <HeaderTwo align="center">
                            {sectionTitle}
                        </HeaderTwo>
                        {/* if content exist, then use richText */}
                        <BodyText>{textContent && <RichText content={textContent}/>}</BodyText>
                        {projects && 
                            <GridContainer>
                                {projects.map((project,i) => {
                                    return <ProjectThumbnails key={uuid()} project={project}/>
                                })}
                            </GridContainer>
                        }
                    </Section>
                )
            })}
            <PullQuote>
                <RichText content={data.fields.pullQuote}/>
            </PullQuote>
            </main>
        )
    }
    return <div>loading</div>
}

export default HomepageSections;