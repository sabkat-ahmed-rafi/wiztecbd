import HTMLContentDisplay from "@/components/HTMLContentDisplay";

const MiddleBlog = ({ richText }) => {
    return (
        <div className="flex flex-col gap-8">
            {richText && richText.length > 0 ? (
                richText.map((item, index) => <HTMLContentDisplay id={`section${index}`} key={index} content={item.content} />)
            ) : (
                <p>No content available</p>
            )}
        </div>
    );
};

export default MiddleBlog;
