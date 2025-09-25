import './TeamCard.css'

export default function TeamCard({team_name, role, avatar}) {
    return (
        <div className='member-container'>
            <img className='team-avatar' src={avatar} alt={'Picture of ' + team_name} />
            <div className='team-info'>
                <h3>{team_name}</h3>
                <p>{role}</p>
            </div>
        </div>
    )
}