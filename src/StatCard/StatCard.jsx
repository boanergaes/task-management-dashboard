import './StatCard.css'

export default function StatCard({key, task_title, quan, task_status, task_color}) {
    return (
        <div key={key} className='stat-card' style={{borderLeftColor: task_color}}>
            <h2>{task_title.toUpperCase()}</h2>
            <h1>{quan}</h1>
            <p>{task_status}</p>
        </div>
    )
}