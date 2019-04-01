import React from 'react'

const List = props => {
    return (
        <div
            spacing={24}
            container
            direction="row"
            alignItems="flex-start"
            justify="center"
        >
            {props.items.map(edge => {
                const {
                    node: {
                        excerpt,
                        frontmatter: { path, title, image },
                    },
                } = edge;
                return (
                    <>
                        <p>{path}</p>
                        <p>{title}</p>
                        <p>{image}</p>
                        <p>{excerpt}</p>
                    </>
                );
            })}
        </div>
    );
}

export default List;