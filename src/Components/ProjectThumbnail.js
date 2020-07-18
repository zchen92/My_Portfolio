import React from 'react';
import { Link } from 'react-router-dom'
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { HeaderThree, SmallFlex } from '../Styles/type'

const ProjectThumbnails = (props) => {
    return (
        <div>
            <Link to={`/${props.project.fields.title}`}>
                <HeaderThree>{props.project.fields.title}</HeaderThree>
                <img
                    src={props.project.fields.thumbnail.fields.file.url}
                    alt={props.project.fields.thumbnail.fields.file.title}
                />
                <div><RichText content={props.project.fields.description} /></div>
                <SmallFlex>
                    {props.project.fields.technologies.map((name) => <div>{name}</div>)}
                </SmallFlex>
            </Link>
        </div>
    )
}

export default ProjectThumbnails;