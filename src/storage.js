import alexRiveraImg from './assets/alex-rivera.jpg'
import emmaDevisImg from './assets/emma-devis.png'
import mikeJohnsonImg from './assets/mike-johnson.png'
import sarahChenImg from './assets/sarah-chen.png'

export const stats = [
    {
        id: 'st1',
        task_title: 'total tasks',
        quan: 4,
        task_status: 'All tasks in the system',
        task_color: 'blue'
    }, 
    {
        id: 'st2',
        task_title: 'active projects',
        quan: 3,
        task_status: 'Currently running projects',
        task_color: 'green'
    },
    {
        id: 'st3',
        task_title: 'team members',
        quan: 4,
        task_status: 'People in your team',
        task_color: 'orange'
    },
    {
        id: 'st4',
        task_title: 'notifications',
        quan: 3,
        task_status: 'Recent updates',
        task_color: 'gray'
    },
]

export const teamMembers = [
    {
        team_name: 'Sarah Chen',
        role: 'UI/UX Designer',
        avatar: sarahChenImg
    }, 
    {
        team_name: 'Mike Johnson',
        role: 'Backend Developer',
        avatar: mikeJohnsonImg
    },
    {
        team_name: 'Alex Rivera',
        role: 'Technical Writer',
        avatar: alexRiveraImg
    },
    {
        team_name: 'Emma Davis',
        role: 'Frontend Developer',
        avatar: emmaDevisImg
    }
]

export const notifications = [
    {
        noti_title: 'Task Completed',
        content: 'Documentation has been finished by Alex Rivera',
        time: '2 hours'
    },
    {
        noti_title: 'Deadline Approaching',
        content: 'Homepage design is due in 3 days',
        time: '4 hours'
    },
    {
        noti_title: 'New Team Member',
        content: 'Emma Davis joined the project',
        time: '1 day ago'
    }
]

export const recentActivity = [
    {
        person: 'Sarah Chen',
        deed: 'updated',
        thing: 'Homepage Design', 
        time: '30 minutes'
    },
    {
        person: 'Mike Johnson',
        deed: 'commented on',
        thing: 'Database Setup', 
        time: '1 hour'
    },
    {
        person: 'Alex Rivera',
        deed: 'completed',
        thing: 'API Documentation', 
        time: '2 hours'
    }
]

export const projects = [
    {
        proj_title: 'E-commerce Platform',
        description: 'Building a modern online shopping experience',
        members: 8,
        date: '2/15/2024'
    },
    {
        proj_title: 'Mobile App',
        description: 'Cross-platform mobile application development',
        members: 5,
        date: '3/1/2024'
    },
    {
        proj_title: 'Analytics Dashboard',
        description: 'Real-time data visualization and reporting',
        members: 3,
        date: '1/30/2024'
    }
]