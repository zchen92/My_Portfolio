import React from 'react';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { HeaderThree, SmallFlex } from '../Styles/type'

const ProjectThumbnails = (props) => {
    return(
        <div>
            <HeaderThree>{props.project.fields.title}</HeaderThree>
            <img 
                src={props.project.fields.thumbnail.fields.file.url}
                alt={props.project.fields.thumbnail.fields.file.title}
            />
            <div><RichText content={props.project.fields.description}/></div>
            <SmallFlex>
                {props.project.fields.technologies.map((name)=> <div>{name}</div>)}
            </SmallFlex>
        </div>
    )
}

export default ProjectThumbnails;