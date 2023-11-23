import ContentCard from './ContentCard';

const ContentList = ({contents}) =>{
    return(
        <>
            {contents.map((content) => (
                <ContentCard key={content.id} id={content.id} title={content.title} sources={content.sourceContentDtoList} description={content.description}  subscribed={content.subscribed} />
            ))}
        </>
    )
}

export default ContentList;