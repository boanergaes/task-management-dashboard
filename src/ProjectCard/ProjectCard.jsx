import './ProjectCard.css'

export default function ProjectCard({proj_title, description, members, date}) {
    return (
        <div className='project-card'>

            <h2 className='h2'>{proj_title}</h2>

            <p className='medium-text'>{description}</p>

            <div className="meta-container">
                <div className='meta members'>
                    <div className='meta-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users meta-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span>{members} members</span>
                </div>
                <div className="meta date">
                    <div className="meta-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar meta-icon"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    </div>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}