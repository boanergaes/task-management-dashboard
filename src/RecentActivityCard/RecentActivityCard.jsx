import './RecentActivityCard.css'

export default function RecentActivityCard({person, deed, thing, time}) {
    return (
        <div className='activity-card'>
            <p className='activity'>
                <span className='person-name'>{person}</span> {deed} <span className='thing-name'>{thing}</span>
            </p>
            <p className='time'>{time + ' ago'}</p>
        </div>
    )
}