// import React from 'react'
// "jsx": "react"
type Props={
    title: string,
    content: string,
    isImportant: boolean,
    images: string[],
    tags: string
}
const Article = (props:Props) => {
    const {
        title,
        content,
        isImportant,
        images,
        tags
    } = props

    const renderTag = (tag) => (
        <a href={ tag.link } key={tag.link}>
            { tag.title }
        </a>
    );

    return (
        <>
            <h2>{ title }</h2>
            <div>{ content }</div>
            { isImportant && (
                <p>It is important!</p>
            ) }
            { images && images.map((item, index) => (
                <img src={ item } key={index} />
            )) }
            { tags && tags.map(item => renderTag(item)) }
        </>
    );
}