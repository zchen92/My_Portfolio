import React from 'react'

const ProjectPage = ({ content }) => {
    console.log({ content })
    return (
        <>
            <h2>{content.fields.title}</h2>
            <div>
                <img src={content.fields.thumbnail.fields.file.url} />
            </div>
        </>
    )
}

export default ProjectPage;