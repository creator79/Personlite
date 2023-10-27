const BlogCard = ({ data }) => {
    const getDayMonth = (date) => {
        const d = new Date(date);
        return {
            day: d.getDate(),
            month: d.toLocaleString('default', { month: 'short' }),
        };
    };
    const date = getDayMonth(data.dateAdded);

    return (
        <div className="mt-4">
            <div className="max-w-lg   ">
                <div className="bg-gray-800 shadow-md border-violet-600  rounded-lg max-w-sm mb-4">
                <div >
                    <a href="https://creator79.hashnode.dev/">
                        <img
                            className="rounded-t-lg"
                            src={data.coverImage}
                            alt="a"
                        />
                    </a>
                    <div className="p-5">
                        <a href="https://creator79.hashnode.dev/">
                            <h5 className="text-white  font-bold text-2xl tracking-tight mb-2">
                                <span className="text-pink-600">{data.title.charAt(0)}</span>
                                {data.title.slice(1)}
                            </h5>
                        </a>
                        <p className="font-normal text-white mb-3">{data.brief}</p>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default BlogCard;