import { useEffect, useState } from "react"

//custom hook to fetch teams data
const useTeamData = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teams')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, []);

    return [teams];
}

export default useTeamData;