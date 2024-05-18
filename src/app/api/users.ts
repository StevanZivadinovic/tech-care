export const getAllUsers = async (username:string, password:string) => {

    const auth = btoa(`${username}:${password}`);

    try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.warn('Fetch error:', error);
        throw error; 
    }
};
