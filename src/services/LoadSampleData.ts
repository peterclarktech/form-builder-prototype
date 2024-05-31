import SampleCrudData from "../utils/SampleData";

const loadSampleData = async (addDelay = true) => {
    const delayFn = () => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    if (addDelay) await delayFn();

    const response = new Response(JSON.stringify(SampleCrudData), {
        status: 200,
        headers: {
            "Content-Type": "application/json; utf-8",
        },
    });

    return response.json();
}

export default loadSampleData;