import './TaskCard.css'

export default function TaskCard({task_title, description, person, date}) {
    return (
        <div className="task-card">
            <h2 className='h2'>{task_title}</h2>
            <p className='medium-text'>{description}</p>
            <div className="meta-container">

                <div className="meta person">
                    <div className="meta-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user meta-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <span>{person}</span>
                </div>

                <div className="meta date">
                    <div className="meta-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-calendar meta-icon"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    </div>
                    <span>{date}</span>
                </div>

            </div>
        </div>
    )
}