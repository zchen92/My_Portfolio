import React from 'react'
import Layout from '../Layout'

const ProjectPage = ({ content }) => {
    console.log({ content })
    return (
        <Layout>
            <h2>{content.fields.title}</h2>
            <div>
                <img src={content.fields.thumbnail.fields.file.url} />
            </div>
        </Layout>
    )
}

export default ProjectPage;