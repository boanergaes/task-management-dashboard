import './App.css'

import johnDoeImg from './assets/john-doe.png'

import { stats, teamMembers, notifications, recentActivity, projects, tasks } from './storage'

function Button({className, content, btn_title}) {
    return (
        <button className={className} title={btn_title}>
            {content}
        </button>
    )
}

function Header() {
    return (
        <header>
            <div className='header-content'>
                <h1>Task Management Dashboard</h1>

                <div className="header-tools">
                    <Button className='icon-btn' btn_title='Search' content={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search icon"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>} />
                    <Button className='icon-btn' btn_title='Notifications' content={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell icon"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>}/>
                    <Button className='icon-btn' btn_title='Settings' content={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings icon"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>}/>
                </div>
            </div>
        </header>
    )
}

function Manager() {
    return (
        <div className='manager'>
            <div className='manager-info'>
                <img className='manager-avatar' src={johnDoeImg} alt="John Doe" />
                <div>
                    <h1 className='manager-name'>John Doe</h1>
                    <p>Project Manager</p>
                </div>
            </div>
            <p className='email'>john@example.com</p>
        </div>
    )
}

function Teams() {
    const teams = teamMembers.map(({team_name, role, avatar}) => {
        return (
            <div className='member-container'>
                <img className='team-avatar' src={avatar} alt={'Picture of ' + team_name} />
                <div className='team-info'>
                    <h3>{team_name}</h3>
                    <p>{role}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='team-container'>
            <h2 className='h2'>Team Members</h2>

            <div className='inner-team-container'>
                {teams}
            </div>
        </div>
    )
}

function Notifications() {
    const notification_list = notifications.map(({noti_title, content, time}) => {
        return (
            <div className='notification-card'>
                <div className='notification-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-bell icon"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                </div>

                <div className='notification-content'>
                    <h3 className='notification-title'>{noti_title}</h3>
                    <p className='notification-content'>{content}</p>
                    <p className='time'>{time + ' ago'}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='notifications'>
            <h2 className='h2'>Notifications</h2>

            <div className='notifications-container'>
                {notification_list}
            </div>
        </div>
    )
}

function RecentActivity() {
    const recent_activity_list = recentActivity.map(({person, deed, thing, time}) => {
        return (
            <div className='activity-card'>
                <p className='activity'>
                    <span className='person-name'>{person}</span> {deed} <span className='thing-name'>{thing}</span>
                </p>
                <p className='time'>{time + ' ago'}</p>
            </div>
        )
    })

    return (
        <div className='activity-container'>
            <h2 className='h2'>Recent Activity</h2>

            <div className='activity-list'>
                {recent_activity_list}
            </div>
        </div>
    )
}

function StatCard({key, task_title, quan, task_status, task_color}) {
    return (
        <div key={key} className='stat-card' style={{borderLeftColor: task_color}}>
            <h2>{task_title.toUpperCase()}</h2>
            <h1>{quan}</h1>
            <p>{task_status}</p>
        </div>
    )
}

function Stats() {
    const statsList = stats.map(({id, task_title, quan, task_status, task_color}) => {
        return (
            <StatCard key={id} task_title={task_title} quan={quan} task_status={task_status} task_color={task_color} />
        )
    })

    return (
        <div className='card-container'>
            { statsList }
        </div>
    )
}

function Projects() {
    const projects_list = projects.map(({proj_title, description, members, date}) => {
        return (
            <div className='project-card'>

                <h2 className='h2'>{proj_title}</h2>

                <p className='medium-text'>{description}</p>

                <div className="meta-container">
                    <div className='meta members'>
                        <div className='meta-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-users meta-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <span>{members} members</span>
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
    })

    return (
        <div className="project-container">
            {projects_list}
        </div>
    )
}

function Tasks() {
    const tasks_list = tasks.map(({task_title, description, person, date}) => {
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
    })

    return (
        <div className="tasks-container">
            <h1 className='tasks-header'>Recent Tasks</h1>

            <div className="tasks-list">
                {tasks_list}
            </div>
        </div>
    )
}

function MainSection() {
    return (
        <section className='main-section'>
            <div className='main-container'>
                <main>
                    <Stats />
                    <Projects />
                    <Tasks />
                </main>

                <aside>
                    <Manager />
                    <Teams />
                    <Notifications />
                    <RecentActivity />
                </aside>
            </div>
        </section>
    )
}

function ALi({text, href}) {
    return (
        <a href={href}>
            <li>{text}</li>
        </a>
    )
}

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="upper">
                    <ul className="company-sec">
                        <h2 className="h2">Company</h2>
                        <ALi text='About Us' href='#' />
                        <ALi text='Careers' href='#' />
                        <ALi text='Contact' href='#' />
                    </ul>

                    <ul className="product-sec">
                        <h2 className="h2">Products</h2>
                        <ALi text='Features' href='#' />
                        <ALi text='Pricing' href='#' />
                        <ALi text='Support' href='#' />
                    </ul>

                    <ul className="resources">
                        <h2 className="h2">Resources</h2>
                        <ALi text='Documentation' href='#' />
                        <ALi text='Blog' href='#' />
                        <ALi text='community' href='#' />
                    </ul>
                </div>

                <div className="lower">
                    © 2024 Task Management Dashboard. All rights reserved.
                </div>
            </div>
        </footer>
    )
}


export default function App() {
    return (
        <>
            <Header />

            <MainSection />

            <Footer />
        </>
    )
}