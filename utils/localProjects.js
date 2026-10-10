import lesnaPhoto from '~/assets/projects/local-projects/1.webp'
import artPhoto from '~/assets/projects/local-projects/2.webp'

export const localProjects = [
    {
        id: 'lesna-swietlica',
        name: 'Leśna Świetlica',
        category: 'Local project',
        date: '2021 – 2023',
        main_photo: lesnaPhoto,
        imageAlt: 'Leśna Świetlica project activities',
        description: [
            'We have experience in working with children from dysfunctional families, from different backgrounds.',
            'For 2.5 years our Foundation has been running a sociotherapeutic day care center in the town of Leśna (population of 5 000 people).',
            'Integration activities, nature trips, teamwork games, photography workshops, creative workshops, circus workshops, and more.',
        ],
    },
    {
        id: 'art-wibracje',
        name: 'Art_wibracje',
        category: 'Local project',
        date: '01/09/2024 – 31/08/2025',
        main_photo: artPhoto,
        imageAlt: 'Art_wibracje community art project',
        description: [
            'The main goal of the project is the social activation of the inhabitants of Jelenia Góra.',
        ],
        goals: [
            'Making young people from pathological environments aware of alternative, socially useful ways of spending free time.',
            'Creating murals and artistic installations bearing a social message.',
            'A change in the perception of Jelenia Góra as a city where nothing is happening and overwhelming boredom, to a city where young people act and create.',
            'Changing the image of the city to become more colourful and artistic.',
            'Increasing social awareness and solidarity among the inhabitants of Jelenia Góra.',
            'Increasing the number of events in the city created by young people for residents.',
        ],
        activities: [
            'Art workshops for local youth on drawing murals, creating art installations, creating benches (including collecting ideas from the local community for murals, collecting ideas for various art installations).',
            'Presentations in schools about our activities, about the European Solidarity Corps program.',
            'Various art happenings, opening of murals, picnics with workshops for the local community.',
        ],
    },
    {
        id: 'wibracje-natury',
        name: 'Wibracje natury',
        category: 'Local project',
        comingSoon: true,
    },
]

