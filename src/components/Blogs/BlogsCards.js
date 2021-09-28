import BlogsCard from './BlogsCard'
import { data } from './BlogsData'

function BlogsCards({ posts }) {
    return (
        <div className='lg:grid grid-cols-2 gap-x-16'>
            {
                data.map((card, idx) => (
                    <div key={idx} className='col-span-1 mb-5 lg:mb-0'>
                        <BlogsCard
                            heading={card.heading}
                            text={card.text}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default BlogsCards
