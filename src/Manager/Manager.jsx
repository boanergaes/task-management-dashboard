import './Manager.css'

import johnDoeImg from '../assets/john-doe.png'

export default function Manager({manager_name, title, email}) {
    return (
        <div className='manager'>
            <div className='manager-info'>
                <img className='manager-avatar' src={johnDoeImg} alt="John Doe" />
                <div>
                    <h1 className='manager-name'>{manager_name}</h1>
                    <p>{title}</p>
                </div>
            </div>
            <p className='email'>{email}</p>
        </div>
    )
}