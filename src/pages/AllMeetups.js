import { useState, useEffect} from 'react'

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//             'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     }
// ]

// a component responsible for displaying all the meetups we have.
// state when changes it evaluates the whole code, so for all the time fetch function works on and on, infinite loop
// for this we use useEffect(), the second [] means whenever the value inside one variable changes it will be executed
// in [] we have to add all external values
function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]); 

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-course-router-default-rtdb.firebaseio.com/meetups.json',
        ).then((response) => {
            return response.json();
        })
        .then((data) => {
            const meetups = [];

            for (const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            console.log(meetups)
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, [setIsLoading, setLoadedMeetups]);
    

    if(isLoading){
        return(
            <section>
                <p>Loading ...</p>
            </section>
        )
    }
    return (
        <section>
            <h1> All Meetups </h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage